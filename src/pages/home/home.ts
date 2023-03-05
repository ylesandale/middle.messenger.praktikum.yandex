import { Block } from "utils/block";
import template from "./home.hbs";

export class HomePage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    render() {
        return this.compile(template, this.props);
    }
}
