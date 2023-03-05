import { Button, ButtonVariant } from "components/common/button";
import { Input, InputErrors, InputType } from "components/common/input";

import { Block, IEvents } from "utils/block";
import validate from "utils/validate";
import { RegEx, RegExKeys } from "consts";
import template from "./profile-password-change-info.hbs";
import * as styles from "../profile-settings-container.module.pcss";

interface ProfilePasswordChangeInfoProps {
    events?: IEvents;
    oldPasswordValue: string;
    newPasswordValue: string;
    newPassword2Value: string;
    errors: InputErrors;
}

export class ProfilePasswordChangeInfo extends Block<ProfilePasswordChangeInfoProps> {
    constructor(props: ProfilePasswordChangeInfoProps) {
        super(props);
    }

    render() {
        this.children.profileItems = [
            new Input({
                label: "Старый пароль",
                type: InputType.password,
                name: "oldPassword",
                value: this.props.oldPasswordValue,
                events: {
                    blur: (e: any) => {
                        validate(this);
                    },
                    focus: (e: any) => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ oldPasswordValue: e.target.value });
                    },
                },
                required: {
                    text: "Неверный пароль",
                    rules: {
                        pattern: RegEx[RegExKeys.password],
                    },
                },
                error: this.props.errors && this.props.errors.oldPassword,
            }),
            new Input({
                label: "Новый пароль",
                type: InputType.password,
                name: "newPassword",
                value: this.props.newPasswordValue,
                events: {
                    blur: (e: any) => {
                        validate(this);
                    },
                    focus: (e: any) => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ newPasswordValue: e.target.value });
                    },
                },
                required: {
                    text: "Неверный пароль",
                    rules: {
                        pattern: RegEx[RegExKeys.password],
                    },
                },
                error: this.props.errors && this.props.errors.newPassword,
            }),
            new Input({
                label: "Повторите новый парол",
                type: InputType.password,
                name: "newPassword2",
                value: this.props.newPassword2Value,
                events: {
                    blur: (e: any) => {
                        validate(this);
                    },
                    focus: (e: any) => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ newPassword2Value: e.target.value });
                    },
                },
                required: {
                    text: "Неверный пароль",
                    rules: {
                        pattern: RegEx[RegExKeys.password],
                    },
                },
                error: this.props.errors && this.props.errors.newPassword2,
            }),
        ];

        this.children.profileButtons = [
            new Button({
                text: "Сохранить",
                variant: ButtonVariant.primary,
                events: {
                    click: () => {
                        console.log(
                            "Старый пароль:",
                            this.props.oldPasswordValue,
                            "Новый пароль:",
                            this.props.newPasswordValue,
                            "Новый пароль(еще раз):",
                            this.props.newPassword2Value,
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
        });
    }
}
