import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import template from "./typography.hbs";
import * as styles from "./typography.module.pcss";

export enum TypographyType {
    bigTitle = "big-title",
    mediumTitle = "medium-title",
    bigSpan = "big-span",
}

interface ITypographyProps {
    text: string;
    tag: string;
    type: TypographyType;
    className?: string;
    events?: IEvents;
}

export class Typography extends Block<ITypographyProps> {
    get classes(): string {
        return classNames(styles.typography, {}, [
            styles[`typography-${this.props.type}`],
            this.props.className,
        ]);
    }

    render() {
        return this.compile(template, { ...this.props, classes: this.classes });
    }
}
