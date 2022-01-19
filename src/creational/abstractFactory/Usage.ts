import { FactoryType } from "./FactoryType";
import { ControlFactory } from "./IControlFactory";
import { Tester } from "./Tester";

export function show() {

 // Abstract factory1
 var factory1: ControlFactory = ControlFactory.getFactory(FactoryType.Apple);
 var tester1: Tester = new Tester(factory1);
 tester1.test();

 // Abstract factory2
 var factory2: ControlFactory = ControlFactory.getFactory(FactoryType.Window);
 var tester2: Tester = new Tester(factory2);
 tester2.test();
}

show();