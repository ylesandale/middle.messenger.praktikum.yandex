import { ChatBottomBlock } from "components/chat-list/chat/chat-bottom-block";
import { ChatTopBlock } from "components/chat-list/chat/chat-top-block";
import { Message } from "components/chat-list/chat/message";
import { MessagePosition } from "components/chat-list/chat/message/message";

import { Block, IEvents } from "utils/block";
import template from "./chat.hbs";
import * as styles from "./chat.module.pcss";

interface ChatProps {
    events?: IEvents;
}

export class Chat extends Block<ChatProps> {
    constructor(props: ChatProps) {
        super(props);
    }

    init() {
        this.children.chatTopBlock = new ChatTopBlock({ userName: "Вадим" });
        this.children.messages = [
            new Message({
                text: "Круто!",
                time: "12:00",
                position: MessagePosition.right,
            }),
            new Message({
                text: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
                time: "11:59",
                position: MessagePosition.left,
            }),
        ];
        this.children.chatBottomBlock = new ChatBottomBlock({
            value: "",
            errors: {},
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
