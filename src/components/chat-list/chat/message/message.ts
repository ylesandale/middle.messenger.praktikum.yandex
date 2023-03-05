import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import checkIcon from "assets/check.svg";
import template from "./message.hbs";
import styles from "./message.module.pcss";

export enum MessagePosition {
    left = "left",
    right = "right",
}

interface MessageProps {
    text: string;
    time: string;
    position: MessagePosition;
    events?: IEvents;
    className?: string;
}

export class Message extends Block<MessageProps> {
    constructor(props: MessageProps) {
        super(props);
    }

    get classes(): string {
        return classNames(styles.message, {}, [
            styles[`message-${this.props.position}`],
            this.props.className,
        ]);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            classes: this.classes,
            styles,
            checkIcon,
        });
    }
}
