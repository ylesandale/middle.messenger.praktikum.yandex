import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import { ButtonType } from "../button";
import template from "./icon-button.hbs";
import styles from "./icon-button.module.pcss";

interface IconButtonProps {
    img: string;
    events?: IEvents;
    className?: string;
    type?: ButtonType;
    alt: string;
}

export class IconButton extends Block<IconButtonProps> {
    constructor(props: IconButtonProps) {
        super(props);

        if (!this.props.type) {
            this.props.type = ButtonType.button;
        }
    }

    get classes(): string {
        return classNames(styles.button, {}, [this.props.className || ""]);
    }

    render() {
        return this.compile(template, { ...this.props, classes: this.classes });
    }
}
