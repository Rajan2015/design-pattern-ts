import { AppWindow } from "./AppWindow";
import { AppWindowDecorator } from "./AppWindowDecorator";

export class AppWindowVerticalSBDecorator extends AppWindowDecorator{
    protected window:AppWindow;
    
  
    public draw(): string {
        return `${this.window.draw()} and vertical scroll bar`;
    }
    
}