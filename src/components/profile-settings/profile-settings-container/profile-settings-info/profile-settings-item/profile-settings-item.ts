import { Block, IEvents } from "utils/block";
import template from "./profile-settings-item.hbs";
import styles from "./profile-settings-item.module.pcss";

interface ProfileSettingsItemProps {
    value: string;
    label: string;
    events?: IEvents;
}

export class ProfileSettingsItem extends Block<ProfileSettingsItemProps> {
    constructor(props: ProfileSettingsItemProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
