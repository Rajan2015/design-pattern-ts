import { IButton } from "./IButton";
import { ControlFactory } from "./IControlFactory";
import { ITextBox } from "./ITextBox";

export class Tester {
    private button: IButton;
    private textbox: ITextBox;


    constructor(factory: ControlFactory) {
        this.button = factory.createButton();
        this.textbox = factory.createTextbox();
    }

    public test(): void {
        console.log(this.button.getButton());
        console.log(this.textbox.getTextbox());
    }
}