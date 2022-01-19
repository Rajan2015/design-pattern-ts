import { IButton } from "./IButton";

export class AppleButton implements IButton {
    getButton(): string {
        return "I am apple button";
    }
    
}