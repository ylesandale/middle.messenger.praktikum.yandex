import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import template from "./chat-item.hbs";
import * as styles from "./chat-item.module.pcss";

interface ChatItemProps {
    events?: IEvents;
    className?: string;
    userName: string;
    lastMessage: string;
    time: string;
    isNewMessage: boolean;
    isCurrent?: boolean;
    numberOfNewMessages?: number;
}

export class ChatItem extends Block<ChatItemProps> {
    constructor(props: ChatItemProps) {
        super(props);
    }

    get classes(): string {
        return classNames(
            styles["chat-item"],
            {
                [styles["chat-item-current"]]: Boolean(this.props.isCurrent),
            },
            [this.props.className || ""]
        );
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
            classes: this.classes,
        });
    }
}
