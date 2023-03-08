import { ChatItem } from "components/chat-list/chat-list-side/chat-item";
import { SearchInput } from "components/chat-list/chat-list-side/search-input";

import { Block, IEvents } from "utils/block";
import profileIcon from "assets/profile.svg";
import template from "./chat-list-side.hbs";
import * as styles from "./chat-list-side.module.pcss";

interface ChatListSideProps {
    events?: IEvents;
}

export class ChatListSide extends Block<ChatListSideProps> {
    init() {
        this.children.searchInput = new SearchInput({
            value: "",
        });
        this.children.chatItems = [
            new ChatItem({
                userName: "Андрей",
                lastMessage: "Изображение",
                time: "10:49",
                isNewMessage: true,
                numberOfNewMessages: 2,
            }),
            new ChatItem({
                userName: "Вадим",
                lastMessage: "Вы: стикер",
                time: "Пт",
                isNewMessage: false,
                isCurrent: true,
            }),
            new ChatItem({
                userName: "Вадим",
                lastMessage: "Вы: стикер",
                time: "Пт",
                isNewMessage: false,
            }),
        ];
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
            profileIcon,
        });
    }
}
