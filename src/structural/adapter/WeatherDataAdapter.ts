import { IWeatherData } from "./IWeatherData";
import { WeatherStoreService } from "./WeatherStoreService";

export class WeatherDataAdapter implements IWeatherData {
    private service: WeatherStoreService;
    constructor() {
        this.service = new WeatherStoreService()
    }

    ingestData(xml: string): boolean {
        console.log('converting XML to JSON',xml);
        const json  = {name:'Rajan',place:'India'}
        return this.service.storeData(json)

    }

}