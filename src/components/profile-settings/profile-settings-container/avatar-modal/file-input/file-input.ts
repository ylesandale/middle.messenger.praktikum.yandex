import { Block, IEvents } from "utils/block";
import template from "./file-input.hbs";
import * as styles from "./file-input.module.pcss";

interface FileInputProps {
    value: string;
    events?: IEvents;
}

export class FileInput extends Block<FileInputProps> {
    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
