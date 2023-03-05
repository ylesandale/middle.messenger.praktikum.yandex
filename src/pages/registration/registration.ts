import { Block } from "utils/block";
import { RegistrationForm } from "components/login/registration-form";
import template from "./registration.hbs";
import styles from "./registration.module.pcss";

export class RegistrationPage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    init() {
        this.children.registrationForm = new RegistrationForm({
            emailValue: "",
            loginValue: "",
            nameValue: "",
            surnameValue: "",
            telValue: "",
            passwordValue: "",
            password2Value: "",
            errors: {},
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
