import { IButton } from "./IButton";

export class WindowButton implements IButton {
    getButton(): string {
        return "I am window button";
    }
    
}