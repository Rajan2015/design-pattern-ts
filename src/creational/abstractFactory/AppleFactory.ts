import { AppleButton } from "./AppleButton";
import { AppleTextbox } from "./AppleTextbox";
import { IButton } from "./IButton";
import { ControlFactory } from "./IControlFactory";
import { ITextBox } from "./ITextBox";

export class AppleFactory implements ControlFactory{
    createTextbox(): ITextBox {
       return new AppleTextbox();
    }
    createButton(): IButton {
        return new AppleButton();
    }

}