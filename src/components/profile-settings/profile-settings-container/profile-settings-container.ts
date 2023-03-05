import { Block, IEvents } from "utils/block";
import { ProfileAvatar } from "components/profile-settings/profile-settings-container/profile-avatar";
import { Typography, TypographyType } from "components/common/typography";
import {
    ProfileDisplayMode,
    ProfileSettingsInfo,
} from "components/profile-settings/profile-settings-container/profile-settings-info";
import { SideBackButton } from "components/profile-settings/profile-settings-container/side-back-button";
import { AvatarModal } from "components/profile-settings/profile-settings-container/avatar-modal";
import { ProfileSettingsChangeInfo } from "components/profile-settings/profile-settings-container/profile-settings-change-info";
import { ProfilePasswordChangeInfo } from "components/profile-settings/profile-settings-container/profile-password-change-info";
import styles from "./profile-settings-container.module.pcss";
import template from "./profile-settings-container.hbs";

interface IProfileSettingsContainerProps {
    events?: IEvents;
    displayMode: ProfileDisplayMode;
}

export class ProfileSettingsContainer extends Block<IProfileSettingsContainerProps> {
    constructor(props: IProfileSettingsContainerProps) {
        super(props);
    }

    render() {
        function getContent(mode: ProfileDisplayMode) {
            const profileSettingsInfo = new ProfileSettingsInfo({
                emailValue: "",
                loginValue: "",
                nameValue: "",
                surnameValue: "",
                telValue: "",
                oldPasswordValue: "",
                newPasswordValue: "",
                newPassword2Value: "",
                errors: {},
            });

            const profileSettingsChangeInfo = new ProfileSettingsChangeInfo({
                emailValue: "",
                loginValue: "",
                nameValue: "",
                surnameValue: "",
                telValue: "",
                errors: {},
            });

            const profilePasswordChangeInfo = new ProfilePasswordChangeInfo({
                oldPasswordValue: "",
                newPasswordValue: "",
                newPassword2Value: "",
                errors: {},
            });

            if (mode === ProfileDisplayMode.edit) {
                return profileSettingsChangeInfo;
            }

            if (mode === ProfileDisplayMode.password) {
                return profilePasswordChangeInfo;
            }

            return profileSettingsInfo;
        }
        this.children.profileAvatar = new ProfileAvatar({});

        this.children.text = new Typography({
            tag: "h3",
            type: TypographyType.mediumTitle,
            text: "Иван",
        });

        this.children.profileSettings = getContent(this.props.displayMode);

        this.children.sideBackButton = new SideBackButton({});

        this.children.avatarModal = new AvatarModal({});
        return this.compile(template, {
            ...this.props,
            styles,
        });
    }
}
