import { ROUTE } from "consts";

export const getRoute = (): ROUTE => {
    const path: string = document.location.pathname;

    switch (path) {
        case "/authorization":
            return ROUTE.authorization;
        case "/registration":
            return ROUTE.registration;
        case "/chat-list":
            return ROUTE.chatList;
        case "/profile-settings":
            return ROUTE.profileSettings;
        case "/profile-settings-change":
            return ROUTE.profileSettingsChange;
        case "/profile-password-change":
            return ROUTE.profilePasswordChange;
        case "/":
            return ROUTE.home;
        case "/500":
            return ROUTE.serverError;
        default:
            return ROUTE.notFound;
    }
};
