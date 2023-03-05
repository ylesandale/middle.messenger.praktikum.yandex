import { Block } from "utils/block";
import { ChatListSide } from "components/chat-list/chat-list-side";
import { ChatEmpty } from "components/chat-list/chat-empty";
import { Chat } from "components/chat-list/chat";
import styles from "./chat-list.module.pcss";
import template from "./chat-list.hbs";

export class ChatListPage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    init() {
        this.children.chatListSide = new ChatListSide({});

        this.children.chatEmptyBlock = new ChatEmpty({});
        this.children.chat = new Chat({});
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}