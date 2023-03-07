import { Block } from "utils/block";
import { ProfileDisplayMode } from "components/profile-settings/profile-settings-container/profile-settings-info";
import { ProfileSettingsContainer } from "components/profile-settings/profile-settings-container";
import template from "./profile-settings-change.hbs";

export class ProfileSettingsChangePage extends Block<EmptyObj> {
    init() {
        this.children.profileSettingsContainer = new ProfileSettingsContainer({
            displayMode: ProfileDisplayMode.edit,
        });
    }

    render() {
        return this.compile(template, this.props);
    }
}
