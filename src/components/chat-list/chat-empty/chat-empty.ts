import { Typography, TypographyType } from "components/common/typography";

import { Block, IEvents } from "utils/block";
import template from "./chat-empty.hbs";
import * as styles from "./chat-empty.module.pcss";

interface ChatEmptyProps {
    events?: IEvents;
}

export class ChatEmpty extends Block<ChatEmptyProps> {
    constructor(props: ChatEmptyProps) {
        super(props);
    }

    init() {
        this.children.text = new Typography({
            tag: "p",
            text: "Выберите чат чтобы отправить сообщение",
            type: TypographyType.bigSpan,
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
