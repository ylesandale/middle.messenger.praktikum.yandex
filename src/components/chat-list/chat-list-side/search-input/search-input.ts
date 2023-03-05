import { Block, IEvents } from "utils/block";
import { classNames } from "utils/classNames";
import searchIcon from "assets/search.svg";
import template from "./search-input.hbs";
import * as styles from "./search-input.module.pcss";

interface SearchInputProps {
    value: string;
    events?: IEvents;
    className?: string;
}

export class SearchInput extends Block<SearchInputProps> {
    constructor(props: SearchInputProps) {
        super(props);
    }

    get classes(): string {
        return classNames(styles["search-input"], {}, [
            this.props.className || "",
        ]);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            classes: this.classes,
            searchIcon,
            styles,
        });
    }
}
