import { InputRequired } from "components/common/input";
import { Block, IEvents } from "utils/block";
import template from "./message-input.hbs";
import * as styles from "./message-input.module.pcss";

interface MessageInputProps {
    value: string;
    name: string;
    error: string;
    required?: InputRequired;
    events?: IEvents;
}

export class MessageInput extends Block<MessageInputProps> {
    constructor(props: MessageInputProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
