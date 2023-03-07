import { nanoid } from "nanoid";
import { BlockProps, IEvents } from "./types";
import EventBus from "../eventBus";

type IProps<T> = T & BlockProps;

// Нельзя создавать экземпляр данного класса
export class Block<T> {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    } as const;

    public id = nanoid(6);

    protected props: IProps<T>;

    public children: Record<string, Block<any> | Block<any>[]>;

    private eventBus: () => EventBus;

    private _element: HTMLElement | null = null;

    /** JSDoc
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(propsWithChildren: IProps<T> | object = {}) {
        const eventBus = new EventBus();

        const { props, children } =
            this._getChildrenAndProps(propsWithChildren);

        this.children = children;
        this.props = this._makePropsProxy(props);

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _getChildrenAndProps(childrenAndProps: any): IProps<T> {
        const props: IProps<T> | Record<string, any> = {};
        const children: Record<string, Block<T> | Block<T>[]> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (
                Array.isArray(value) &&
                value.every((el) => el instanceof Block)
            ) {
                children[key] = value;
            } else if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { props, children };
    }

    _addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            if (eventName === "blur" || eventName === "focus") {
                if (this.element!.querySelector("input")) {
                    this.element!.querySelector("input")!.addEventListener(
                        eventName,
                        events[eventName]!
                    );
                }
                if (this.element!.querySelector("textarea")) {
                    this.element!.querySelector("textarea")!.addEventListener(
                        eventName,
                        events[eventName]!
                    );
                }
            } else {
                this._element?.addEventListener(
                    eventName,
                    events[eventName as keyof IEvents]
                );
            }
        });
    }

    _registerEvents(eventBus: EventBus) {
        eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    private _init() {
        this.init();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    protected init() {}

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() {}

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);

        Object.values(this.children).forEach((child) => {
            if (Array.isArray(child)) {
                child.forEach((c) => c.dispatchComponentDidMount());
            } else {
                child.dispatchComponentDidMount();
            }
        });
    }

    private _componentDidUpdate(oldProps: IProps<T>, newProps: IProps<T>) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: IProps<T>, newProps: IProps<T>) {
        return true;
    }

    setProps = (nextProps: Partial<IProps<T>>) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    private _render() {
        const fragment = this.render();

        this._removeEvents();
        const newElement = fragment.firstElementChild as HTMLElement;

        if (this._element) {
            this._element.replaceWith(newElement);
        }

        this._element = newElement;

        this._addEvents();
    }

    protected compile(template: (context: any) => string, context: any) {
        const contextAndStubs = { ...context };

        Object.entries(this.children).forEach(([name, component]) => {
            if (Array.isArray(component)) {
                contextAndStubs[name] = component.map(
                    (child) => `<div data-id="${child.id}"></div>`
                );
            } else {
                contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
            }
        });

        const html = template(contextAndStubs);

        const temp = document.createElement("template");

        temp.innerHTML = html;

        Object.entries(this.children).forEach(([_, component]) => {
            if (Array.isArray(component)) {
                component.forEach((child) => {
                    const stub = temp.content.querySelector(
                        `[data-id="${child.id}"]`
                    );

                    if (!stub) {
                        return;
                    }

                    // child.getContent()?.append(...Array.from(stub.childNodes));

                    stub.replaceWith(child.element!);
                });
            } else {
                const stub = temp.content.querySelector(
                    `[data-id="${component.id}"]`
                );

                if (!stub) {
                    return;
                }

                // component.getContent()?.append(...Array.from(stub.childNodes));

                stub.replaceWith(component.element!);
            }
        });

        return temp.content;
    }

    _removeEvents() {
        const { events } = this.props;

        if (!events || !this.element) {
            return;
        }

        Object.entries(events).forEach(([event, listener]) => {
            if (event === "blur" || event === "focus") {
                if (this.element!.querySelector("input")) {
                    this.element!.querySelector("input")?.removeEventListener(
                        event,
                        listener
                    );
                }
                if (this.element!.querySelector("textarea")) {
                    this.element!.querySelector(
                        "textarea"
                    )?.removeEventListener(event, listener);
                }
            } else {
                this.element?.removeEventListener(event, listener);
            }
        });
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    _makePropsProxy(props: IProps<T>) {
        return new Proxy(props, {
            get: (target, prop) => {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set: (target, prop, value) => {
                const oldTarget = { ...target };
                target[prop] = value;

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty: () => {
                throw new Error("Нет доступа");
            },
        });
    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}
