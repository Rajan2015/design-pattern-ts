export class AppWindow implements IAppWindow{
    public draw(): string {
        console.log("Window drawn.");
        return "New Window";
    }
    
}