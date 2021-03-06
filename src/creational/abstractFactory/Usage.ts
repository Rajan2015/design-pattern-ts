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


/**
 * Abtract Factory
 * 
 * Purpose:
 * Abtract Factory Pattern allows you to create different type of related objects without providiing the 
 * actual concrete class
 * The usecase in which we do not know until runtime that which type of objects we want to create, it is perfect.
 * Also this allows for extension as we can a new type without changing the actual code.
 * 
 * Example:
 * Trying to create controls of type Window & Apple ,can be entended to use new type Google
 * 
 */