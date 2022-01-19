import { IButton } from "./IButton";
import { ControlFactory } from "./IControlFactory";
import { ITextBox } from "./ITextBox";
import { WindowButton } from "./WindowButton";
import { WindowTextbox } from "./WindowTextbox";

export class WindowFactory implements ControlFactory{
    createTextbox(): ITextBox {
       return new WindowTextbox();
    }
    createButton(): IButton {
        return new WindowButton();
    }

}