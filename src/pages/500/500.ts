import { Block } from "utils/block";
import { ErrorTemplate } from "components/errors/error-template";
import template from "./500.hbs";

export class ServerErrorPage extends Block<EmptyObj> {
    init() {
        this.children.errorTemplate = new ErrorTemplate({
            title: "500",
            subtitle: "Мы уже фиксим",
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
