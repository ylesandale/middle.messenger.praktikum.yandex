import { NotFoundPage } from "pages/404";
import { ServerErrorPage } from "pages/500";
import { AuthorizationPage } from "pages/authorization";
import { ChatListPage } from "pages/chat-list";
import { HomePage } from "pages/home";
import { ProfilePasswordChangePage } from "pages/profile-password-change";
import { ProfileSettingsPage } from "pages/profile-settings";
import { ProfileSettingsChangePage } from "pages/profile-settings-change";
import { RegistrationPage } from "pages/registration";

export enum ROUTE {
    home = "home",
    notFound = "notFound",
    serverError = "serverEror",
    authorization = "authorization",
    registration = "registration",
    chatList = "chatList",
    profileSettings = "profileSettings",
    profileSettingsChange = "profileSettingsChange",
    profilePasswordChange = "profilePasswordChange",
}

export const ROUTES = {
    [ROUTE.home]: HomePage,
    [ROUTE.registration]: RegistrationPage,
    [ROUTE.authorization]: AuthorizationPage,
    [ROUTE.notFound]: NotFoundPage,
    [ROUTE.serverError]: ServerErrorPage,
    [ROUTE.chatList]: ChatListPage,
    [ROUTE.profileSettings]: ProfileSettingsPage,
    [ROUTE.profileSettingsChange]: ProfileSettingsChangePage,
    [ROUTE.profilePasswordChange]: ProfilePasswordChangePage,
};
