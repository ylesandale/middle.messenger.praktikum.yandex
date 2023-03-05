import { Block } from "utils/block";
import { ErrorTemplate } from "components/errors/error-template";
import template from "./404.hbs";

export class NotFoundPage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    init() {
        this.children.errorTemplate = new ErrorTemplate({
            title: "404",
            subtitle: "Не туда попали",
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
