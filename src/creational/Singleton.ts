/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
 class Singleton {
    private static instance: Singleton;

    /**
     * The Singleton's constructor should always be private to prevent direct
     * construction calls with the `new` operator.
     */
    private constructor() { }

    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation let you subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    /**
     * Finally, any singleton should define some business logic, which can be
     * executed on its instance.
     */
    public saveCache(key:string, data:any) {
        // ...
    }
    
    public getCache(key:string) {
        // ...
    }
}

/**
 * Singleton
 * 
 * Purpose:
 * When we need to keep only one instance of a class. Its useful when we are trying to access an expensive resource.
 * Or we are trying to keep the flow of imformation central and to flow from only one point
 * 
 * Real word examples:
 * 1: Caching - We always need our cache to be central and single instance.
 * 2: Logging
 * 3: DB connection
 */