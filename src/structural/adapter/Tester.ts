import { WeatherDataAdapter } from "./WeatherDataAdapter";


export class Tester {
   
    private xml:string = "<User><Name>Rajan</Name><Place>India</Place></User>";
    private adapter:WeatherDataAdapter;


  
    public test(): void {
     this.adapter = new WeatherDataAdapter();
     this.adapter.ingestData(this.xml);
    }
}

/**
 * Adapter
 * 
 * Purpose:
 * Adapter makes things work after they're designed. 
 * actual concrete class
 * The usecase in which we do not know until runtime that which type of objects we want to create, it is perfect.
 * Also this allows for extension as we can a new type without changing the actual code.
 * 
 * Example:
 * Problem Statement:
 * Suppose we are fetching a stream of data which is in the form of XML and we want to store this stream of 
 * data in an analytical store. Now we already have implementation of storing the JSON format data in analytic store.
 * But the client will only send data in XML format. What to do?
 * 
 * 
 * 
 */