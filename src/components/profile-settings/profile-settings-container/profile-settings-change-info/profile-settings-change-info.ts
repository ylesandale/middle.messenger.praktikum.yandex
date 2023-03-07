import { Button, ButtonVariant } from "components/common/button";
import { Input, InputErrors, InputType } from "components/common/input";

import { Block, IEvents } from "utils/block";
import validate from "utils/validate";
import { RegEx, RegExKeys } from "consts";
import template from "./profile-settings-change-info.hbs";
import * as styles from "../profile-settings-container.module.pcss";

interface ProfileSettingsInfoProps {
    events?: IEvents;
    emailValue: string;
    loginValue: string;
    nameValue: string;
    surnameValue: string;
    telValue: string;
    errors: InputErrors;
}

export class ProfileSettingsChangeInfo extends Block<ProfileSettingsInfoProps> {
    render() {
        this.children.profileItems = [
            new Input({
                label: "Почта",
                type: InputType.email,
                name: "email",
                value: this.props.emailValue,
                events: {
                    blur: () => {
                        validate(this);
                    },
                    focus: () => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ emailValue: e.target.value });
                    },
                },
                required: {
                    text: "Неверная почта",
                    rules: {
                        pattern: RegEx[RegExKeys.email],
                    },
                },
                error: this.props.errors && this.props.errors.email,
            }),
            new Input({
                label: "Логин",
                type: InputType.text,
                name: "login",
                value: this.props.loginValue,
                events: {
                    blur: () => {
                        validate(this);
                    },
                    focus: () => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ loginValue: e.target?.value });
                    },
                },
                required: {
                    text: "Неверный логин",
                    rules: {
                        pattern: RegEx[RegExKeys.login],
                    },
                },
                error: this.props.errors && this.props.errors.login,
            }),
            new Input({
                label: "Имя",
                type: InputType.text,
                name: "first_name",
                value: this.props.nameValue,
                events: {
                    change: (e: any) => {
                        this.setProps({ nameValue: e.target?.value });
                    },
                },
                required: {
                    text: "Неверное имя",
                    rules: {
                        pattern: RegEx[RegExKeys.notEmpty],
                    },
                },
                error: this.props.errors && this.props.errors.first_name,
            }),
            new Input({
                label: "Фамилия",
                type: InputType.text,
                name: "second_name",
                value: this.props.surnameValue,
                events: {
                    change: (e: any) => {
                        this.setProps({ surnameValue: e.target?.value });
                    },
                },
                required: {
                    text: "Неверная фамилия",
                    rules: {
                        pattern: RegEx[RegExKeys.notEmpty],
                    },
                },
                error: this.props.errors && this.props.errors.second_name,
            }),
            new Input({
                label: "Телефон",
                type: InputType.tel,
                name: "phone",
                value: this.props.telValue,
                required: {
                    text: "Неверный телефон",
                    rules: {
                        pattern: RegEx[RegExKeys.tel],
                    },
                },
                events: {
                    blur: () => {
                        validate(this);
                    },
                    focus: () => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ telValue: e.target?.value });
                    },
                },
                error: this.props.errors && this.props.errors.phone,
            }),
        ];

        this.children.profileButtons = [
            new Button({
                text: "Сохранить",
                variant: ButtonVariant.primary,
                events: {
                    click: () => {
                        console.log(
                            "Почта:",
                            this.props.emailValue,
                            "Логин:",
                            this.props.loginValue,
                            "Имя:",
                            this.props.nameValue,
                            "Фамилия:",
                            this.props.surnameValue,
                            "Телефон:",
                            this.props.telValue,
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
