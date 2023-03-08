export enum RegExKeys {
    notEmpty = "notEmpty",
    email = "email",
    login = "login",
    tel = "tel",
    password = "password",
}

export const RegEx = {
    [RegExKeys.notEmpty]: "^.+$",
    [RegExKeys.email]: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    [RegExKeys.login]: "^(?=.*[A-Za-z])[A-Za-z0-9_\\-]{3,20}$",
    [RegExKeys.tel]:
        "((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{10,15}$",
    [RegExKeys.password]: "^(?=.*[A-Z]).{8,40}$",
};
