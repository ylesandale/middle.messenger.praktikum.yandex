import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import template from "./link.hbs";
import styles from "./link.module.pcss";

export enum LinkType {
    red = "red",
    button = "button",
    underline = "underline",
}

interface ILinkProps {
    href: string;
    className?: string;
    text: string;
    events?: IEvents;
    type?: LinkType;
}

export class Link extends Block<ILinkProps> {
    constructor(props: ILinkProps) {
        super(props);
    }

    get classes(): string {
        return classNames(styles.link, {}, [
            styles[`link-${this.props.type}`],
            this.props.className,
        ]);
    }

    render() {
        return this.compile(template, { ...this.props, classes: this.classes });
    }
}
