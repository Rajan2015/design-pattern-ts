import { AppWindow } from "./AppWindow";
import { AppWindowBackgroundDecorator } from "./AppWindowBackgroundDecorator";
import { AppWindowBorderDecorator } from "./AppWindowBorderDecorator copy";
import { AppWindowVerticalSBDecorator } from "./AppWindowVerticalSBDecorator copy";


export class Tester {




    public test(): void {
        const appWindow = new AppWindow();
        appWindow.draw();

        // adding 1 decorator
        const appWindowWithBorder = new AppWindowBorderDecorator(appWindow);
        appWindowWithBorder.draw();

        // adding 2 decorator
        const appWindowWithVErtiacalSB = new AppWindowVerticalSBDecorator(appWindow);
        appWindowWithVErtiacalSB.draw();

        // adding 3 decorator
        const appWindowWithBackground = new AppWindowVerticalSBDecorator(appWindow);
        appWindowWithBackground.draw();


        // window with all additional decorators
        const allDecorators = new AppWindowVerticalSBDecorator(new AppWindowBorderDecorator(new AppWindowBackgroundDecorator(new AppWindow)));
        allDecorators.draw();
        
    }
}

/**
 * Decorator
 * 
 * Purpose:
 
 * 
 * 
 * 
 */