import { AppWindow } from "./AppWindow";

export class AppWindowDecorator implements IAppWindow{
    protected window:AppWindow;
    
    constructor(window: AppWindow) {
        this.window = window;
    }
    public draw(): string {
        return this.window.draw();
    }
    
}