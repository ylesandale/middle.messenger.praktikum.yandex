export interface IEvents {
    blur: (e: any) => void;
    focus: (e: any) => void;
    submi: (e: any) => void;
    change: (e: any) => void;
    click: (e: any) => void;
}

export interface BlockProps {
    events: IEvents;
}
