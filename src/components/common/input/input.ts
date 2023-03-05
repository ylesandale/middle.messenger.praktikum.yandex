import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import template from "./input.hbs";
import * as styles from "./input.module.pcss";

export enum InputType {
    email = "email",
    file = "file",
    number = "number",
    password = "password",
    search = "search",
    tel = "tel",
    text = "text",
}

interface InputRules {
    pattern: string;
}

export interface InputRequired {
    rules: InputRules;
    min?: number;
    max?: number;
    text: string;
}

interface InputProps {
    type: InputType;
    label: string;
    name: string;
    value?: string;
    events?: IEvents;
    className?: string;
    error?: string;
    required?: InputRequired;
}

export class Input extends Block<InputProps> {
    constructor(props: InputProps) {
        super(props);
    }

    get classes(): string {
        return classNames(styles.input, {}, [this.props.className || ""]);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            classes: this.classes,
            styles,
        });
    }
}
