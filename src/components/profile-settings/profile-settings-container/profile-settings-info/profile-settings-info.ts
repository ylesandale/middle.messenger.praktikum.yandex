import { Link, LinkType } from "components/common/link";
import { ProfileSettingsItem } from "components/profile-settings/profile-settings-container/profile-settings-info/profile-settings-item";

import { Block, IEvents } from "utils/block";
import { InputErrors } from "components/common/input";
import template from "./profile-settings-info.hbs";
import styles from "../profile-settings-container.module.pcss";

export enum ProfileDisplayMode {
    default = "default",
    password = "password",
    edit = "edit",
}

interface ProfileSettingsInfoProps {
    events?: IEvents;
    emailValue: string;
    loginValue: string;
    nameValue: string;
    surnameValue: string;
    telValue: string;
    oldPasswordValue: string;
    newPasswordValue: string;
    newPassword2Value: string;
    errors: InputErrors;
}

export class ProfileSettingsInfo extends Block<ProfileSettingsInfoProps> {
    constructor(props: ProfileSettingsInfoProps) {
        super(props);
    }

    render() {
        this.children.profileItems = [
            new ProfileSettingsItem({
                label: "Почта",
                value: "pochta@yandex.ru",
            }),
            new ProfileSettingsItem({
                label: "Логин",
                value: "ivanivanov",
            }),
            new ProfileSettingsItem({
                label: "Имя",
                value: "Иван",
            }),
            new ProfileSettingsItem({
                label: "Фамилия",
                value: "Иванов",
            }),
            new ProfileSettingsItem({
                label: "Имя в чатие",
                value: "Иван",
            }),
            new ProfileSettingsItem({
                label: "Телефон",
                value: "+7 (909) 967 30 30",
            }),
        ];

        this.children.profileButtons = [
            new Link({
                text: "Изменить данные",
                href: "/profile-settings-change",
            }),
            new Link({
                text: "Изменить пароль",
                href: "/profile-password-change",
            }),
            new Link({
                text: "Выйти",
                href: "/",
                type: LinkType.red,
            }),
        ];

        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
