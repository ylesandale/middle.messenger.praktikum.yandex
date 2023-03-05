import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import template from "./button.hbs";
import styles from "./button.module.pcss";

export enum ButtonVariant {
    primary = "primary",
}

export enum ButtonType {
    submit = "submit",
    button = "button",
    reset = "reset",
}

interface ButtonProps {
    text: string;
    variant: ButtonVariant;
    events?: IEvents;
    className?: string;
    type?: ButtonType;
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super(props);

        if (!this.props.type) {
            this.props.type = ButtonType.button;
        }
    }

    get classes(): string {
        return classNames(styles.button, {}, [
            styles[`button-${this.props.variant}`],
            this.props.className,
        ]);
    }

    render() {
        return this.compile(template, { ...this.props, classes: this.classes });
    }
}
