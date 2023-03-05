import { Block } from "utils/block";
import { AuthorizationForm } from "components/login/authorization-form";
import template from "./authorization.hbs";
import styles from "../registration/registration.module.pcss";

export class AuthorizationPage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    init() {
        this.children.authorizationForm = new AuthorizationForm({
            errors: {},
            loginValue: "",
            passwordValue: "",
        });
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
