import { ITextBox } from "./ITextBox";

export class WindowTextbox implements ITextBox {
    getTextbox(): string {
        return "I am window textbox";
    }
}