import { Block, IEvents } from "utils/block";
import template from "./profile-settings-item.hbs";
import * as styles from "./profile-settings-item.module.pcss";

interface ProfileSettingsItemProps {
    value: string;
    label: string;
    events?: IEvents;
}

export class ProfileSettingsItem extends Block<ProfileSettingsItemProps> {
    render() {
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
