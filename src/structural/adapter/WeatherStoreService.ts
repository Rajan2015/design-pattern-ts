export class WeatherStoreService {
    storeData(jsonData: any): boolean {
        console.log('JSON data stored as ' ,jsonData);
        return true;
    }
}