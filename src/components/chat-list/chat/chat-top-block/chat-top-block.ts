import { Block, IEvents } from "utils/block";
import binCircleIcon from "assets/bin-circle.svg";
import plusCircleIcon from "assets/plus-circle.svg";
import deleteCircleIcon from "assets/delete-circle.svg";
import * as styles from "./chat-top-block.module.pcss";
import template from "./chat-top-block.hbs";

interface ChatTopBlockProps {
    userName: string;
    events?: IEvents;
}

export class ChatTopBlock extends Block<ChatTopBlockProps> {
    constructor(props: ChatTopBlockProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
            binCircleIcon,
            plusCircleIcon,
            deleteCircleIcon,
        });
    }
}
