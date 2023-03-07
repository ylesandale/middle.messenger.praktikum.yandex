import { Block, IEvents } from "utils/block";
import imgIcon from "assets/img.svg";
import template from "./profile-avatar.hbs";
import * as styles from "./profile-avatar.module.pcss";

interface ProfileAvatarProps {
    events?: IEvents;
}

export class ProfileAvatar extends Block<ProfileAvatarProps> {
    render() {
        return this.compile(template, {
            ...this.props,
            styles,
            imgIcon,
        });
    }
}
