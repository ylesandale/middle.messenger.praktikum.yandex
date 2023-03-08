import { Button, ButtonVariant } from "components/common/button";
import { Input, InputErrors, InputType } from "components/common/input";
import { Link } from "components/common/link";
import { Typography, TypographyType } from "components/common/typography";
import { RegEx, RegExKeys } from "consts";
import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import validate from "utils/validate";
import template from "./registration-form.hbs";
import * as styles from "./registration-form.module.pcss";

interface RegistrationFormProps {
    events?: IEvents;
    emailValue: string;
    loginValue: string;
    nameValue: string;
    surnameValue: string;
    telValue: string;
    passwordValue: string;
    password2Value: string;
    errors: InputErrors;
}

export class RegistrationForm extends Block<RegistrationFormProps> {
    get classes(): string {
        return classNames(styles["authorization-container"], {}, [
            styles["authorization-container-extended"],
        ]);
    }

    render() {
        this.children.title = new Typography({
            type: TypographyType.mediumTitle,
            text: "Регистрация",
            className: styles["authorization-title"],
            tag: "h1",
        });

        this.children.inputs = [
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
            new Input({
                label: "Пароль",
                type: InputType.password,
                name: "password",
                value: this.props.passwordValue,
                events: {
                    blur: (e: any) => {
                        validate(this);
                    },
                    focus: (e: any) => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ passwordValue: e.target.value });
                    },
                },
                required: {
                    text: "Неверный пароль",
                    rules: {
                        pattern: RegEx[RegExKeys.password],
                    },
                },
                error: this.props.errors && this.props.errors.password,
            }),
            new Input({
                label: "Пароль(еще раз)",
                type: InputType.password,
                name: "password2",
                value: this.props.password2Value,
                events: {
                    blur: (e: any) => {
                        validate(this);
                    },
                    focus: (e: any) => {
                        validate(this);
                    },
                    change: (e: any) => {
                        this.setProps({ password2Value: e.target.value });
                    },
                },
                required: {
                    text: "Неверный пароль",
                    rules: {
                        pattern: RegEx[RegExKeys.password],
                    },
                },
                error: this.props.errors && this.props.errors.password2,
            }),
        ];

        this.children.submitButton = new Button({
            text: "Зарегистрироваться",
            variant: ButtonVariant.primary,
            events: {
                click: (e: any) => {
                    e.preventDefault();
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
                        "Пароль:",
                        this.props.passwordValue,
                        "Пароль(еще раз):",
                        this.props.password2Value,
                        "Валидация:",
                        validate(this, true)
                    );
                },
            },
        });

        this.children.loginLink = new Link({
            text: "Есть аккаунт?",
            href: "authorization.hbs",
            className: styles["authorization-link"],
        });

        return this.compile(template, {
            ...this.props,
            styles,
            classes: this.classes,
        });
    }
}
