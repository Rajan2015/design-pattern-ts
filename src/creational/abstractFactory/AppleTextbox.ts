import { ITextBox } from "./ITextBox";

export class AppleTextbox implements ITextBox {
    getTextbox(): string {
        return "I am apple textbox";
    }
}