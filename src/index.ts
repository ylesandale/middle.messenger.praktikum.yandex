import { ROUTE } from "consts";
import { getRoute } from "utils/get-route";
import { renderDOM } from "utils/renderDOM";

window.addEventListener("DOMContentLoaded", () => {
    renderDOM(getRoute());
});
