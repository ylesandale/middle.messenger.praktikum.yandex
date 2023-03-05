import { ROUTES } from "consts";

export function renderDOM(route: keyof typeof ROUTES) {
    const root = document.querySelector("#app")!;

    root.innerHTML = "";

    const PageComponent = ROUTES[route];
    const page = new PageComponent();

    root.append(page.getContent()!);

    page.dispatchComponentDidMount();
}
