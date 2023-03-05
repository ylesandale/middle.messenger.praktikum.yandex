import { Block, IEvents } from "utils/block";
import sendIcon from "assets/send.svg";
import template from "./side-back-button.hbs";
import styles from "./side-back-button.module.pcss";

interface SideBackButtonProps {
    events?: IEvents;
}

export class SideBackButton extends Block<SideBackButtonProps> {
    constructor(props: SideBackButtonProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
            sendIcon,
        });
    }
}
