import { Block, IEvents } from "utils/block";
import template from "./file-input.hbs";
import styles from "./file-input.module.pcss";

interface FileInputProps {
    value: string;
    events?: IEvents;
}

export class FileInput extends Block<FileInputProps> {
    constructor(props: FileInputProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
