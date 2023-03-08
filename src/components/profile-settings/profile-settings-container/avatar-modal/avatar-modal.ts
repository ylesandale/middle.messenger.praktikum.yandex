import { Button, ButtonVariant } from "components/common/button";
import { Typography, TypographyType } from "components/common/typography";
import { FileInput } from "components/profile-settings/profile-settings-container/avatar-modal/file-input";

import { Block, IEvents } from "utils/block";
import template from "./avatar-modal.hbs";
import * as styles from "./avatar-modal.module.pcss";

interface AvatarModalProps {
    events?: IEvents;
}

export class AvatarModal extends Block<AvatarModalProps> {
    init() {
        this.children.text = new Typography({
            tag: "p",
            text: "Загрузите файл",
            type: TypographyType.bigSpan,
            className: styles["modal-window-title"],
        });
        this.children.fileInput = new FileInput({ value: "" });
        this.children.button = new Button({
            text: "Поменять",
            variant: ButtonVariant.primary,
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
