import { Button, ButtonVariant } from "components/common/button";
import { ButtonType } from "components/common/button/button";
import { Input, InputErrors, InputType } from "components/common/input";
import { Link } from "components/common/link";
import { Typography, TypographyType } from "components/common/typography";
import { RegEx, RegExKeys } from "consts";
import { Block, IEvents } from "utils/block";
import validate from "utils/validate";
import template from "./authorization-form.hbs";
import styles from "./authorization-form.module.pcss";

interface AuthorizationFormProps {
    events?: IEvents;
    loginValue: string;
    passwordValue: string;
    errors: InputErrors;
}

export class AuthorizationForm extends Block<AuthorizationFormProps> {
    constructor(props: AuthorizationFormProps) {
        super(props);
    }

    render() {
        this.children.title = new Typography({
            type: TypographyType.mediumTitle,
            text: "Вход",
            className: styles["authorization-title"],
            tag: "h1",
        });

        this.children.inputs = [
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
                label: "Пароль",
                type: InputType.password,
                name: "password",
                value: this.props.passwordValue,
                events: {
                    blur: () => {
                        validate(this);
                    },
                    focus: () => {
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
        ];

        this.children.submitButton = new Button({
            text: "Войти",
            variant: ButtonVariant.primary,
            type: ButtonType.submit,
            events: {
                click: (e: any) => {
                    e.preventDefault();
                    console.log(
                        "Логин:",
                        this.props.loginValue,
                        "Пароль:",
                        this.props.passwordValue,
                        "Валидация:",
                        validate(this, true)
                    );
                },
            },
        });

        this.children.loginLink = new Link({
            text: "Впервые?",
            href: "registration.hbs",
            className: styles["authorization-link"],
        });

        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
