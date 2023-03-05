import { Link, LinkType } from "components/common/link";
import { Typography, TypographyType } from "components/common/typography";

import { Block, IEvents } from "utils/block";
import template from "./error-template.hbs";
import * as styles from "./error-template.module.pcss";

interface ErrorTemplateProps {
    events?: IEvents;
    title: string;
    subtitle: string;
}

export class ErrorTemplate extends Block<ErrorTemplateProps> {
    constructor(props: ErrorTemplateProps) {
        super(props);
    }

    init() {
        this.children.title = new Typography({
            tag: "h1",
            text: this.props.title,
            type: TypographyType.bigTitle,
            className: styles["error-page-title"],
        });
        this.children.subtitle = new Typography({
            tag: "p",
            text: this.props.subtitle,
            type: TypographyType.bigSpan,
            className: styles["error-page-subtitle"],
        });
        this.children.link = new Link({
            href: "chat-list.hbs",
            text: "Назад к чатам",
            type: LinkType.button,
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
