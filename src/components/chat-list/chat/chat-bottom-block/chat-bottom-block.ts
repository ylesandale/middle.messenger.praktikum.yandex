import { Block, IEvents } from "utils/block";
import sendIcon from "assets/send.svg";
import locationIcon from "assets/location.svg";
import fileIcon from "assets/file.svg";
import imgIcon from "assets/img.svg";
import validate from "utils/validate";
import { RegEx, RegExKeys } from "consts";
import { IconButton } from "components/common/icon-button";
import { ButtonType } from "components/common/button";
import { InputErrors } from "components/common/input";
import { MessageInput } from "./message-input/message-input";
import * as styles from "./chat-bottom-block.module.pcss";
import template from "./chat-bottom-block.hbs";

interface ChatBottomBlockProps {
    value: string;
    errors: InputErrors;
    events?: IEvents;
}

export class ChatBottomBlock extends Block<ChatBottomBlockProps> {
    render() {
        this.children.messageInput = new MessageInput({
            value: this.props.value,
            name: "message",
            events: {
                blur: () => {
                    validate(this);
                },
                focus: () => {
                    validate(this);
                },
                change: (e: any) => {
                    this.setProps({ value: e.target?.value });
                },
            },
            required: {
                text: "Сообщение не может быть пустое",
                rules: {
                    pattern: RegEx[RegExKeys.notEmpty],
                },
            },
            error: this.props.errors && this.props.errors.message,
        });

        this.children.controlButtons = [
            new IconButton({
                img: imgIcon,
                alt: "Добавить изображение",
                className: styles["chat-input-control-icon"],
            }),
            new IconButton({
                img: fileIcon,
                alt: "Добавить файл",
                className: styles["chat-input-control-icon"],
            }),
            new IconButton({
                img: locationIcon,
                alt: "Добавить локацию",
                className: styles["chat-input-control-icon"],
            }),
            new IconButton({
                img: sendIcon,
                alt: "Отправить сообщение",
                className: styles["chat-input-control-icon-send"],
                type: ButtonType.submit,
                events: {
                    click: (e: any) => {
                        e.preventDefault();
                        console.log(
                            "Сообщение:",
                            this.props.value,
                            "Валидация:",
                            validate(this, true)
                        );
                    },
                },
            }),
        ];

        return this.compile(template, {
            ...this.props,
            styles,
            sendIcon,
            locationIcon,
            fileIcon,
            imgIcon,
        });
    }
}
