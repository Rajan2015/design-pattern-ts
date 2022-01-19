import { AppleFactory } from "./AppleFactory";
import { FactoryType } from "./FactoryType";
import { IButton } from "./IButton";
import { ITextBox } from "./ITextBox";
import { WindowFactory } from "./WindowFactory";

export abstract class ControlFactory {
   abstract createTextbox():ITextBox;
   abstract createButton():IButton;

   static getFactory(factoryType:FactoryType){
       switch(factoryType){
           case FactoryType.Window: return new WindowFactory();
           case FactoryType.Apple: return new AppleFactory();
           default: return new WindowFactory();
       }
   }
}