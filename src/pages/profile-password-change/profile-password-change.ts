import { Block } from "utils/block";
import { ProfileDisplayMode } from "components/profile-settings/profile-settings-container/profile-settings-info";
import { ProfileSettingsContainer } from "components/profile-settings/profile-settings-container";
import template from "./profile-password-change.hbs";

export class ProfilePasswordChangePage extends Block<EmptyObj> {
    constructor() {
        super();
    }

    init() {
        this.children.profileSettingsContainer = new ProfileSettingsContainer({
            displayMode: ProfileDisplayMode.password,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
