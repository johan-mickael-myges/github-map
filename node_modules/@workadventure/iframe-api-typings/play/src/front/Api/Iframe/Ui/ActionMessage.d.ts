import type { ActionMessageOptions } from "../ui";
export declare class ActionMessage {
    private onRemove;
    readonly uuid: string;
    private readonly type;
    private readonly message;
    private readonly callback;
    constructor(actionMessageOptions: ActionMessageOptions, onRemove: () => void);
    private create;
    remove(): Promise<void>;
    triggerCallback(): void;
}
