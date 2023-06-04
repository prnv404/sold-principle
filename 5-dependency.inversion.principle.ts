/* 
#5 — Dependency Inversion Principle

Entities must depend on abstractions, not on concretions.

This means that high-level modules must not depend on low-level modules
 or implementations — instead, they should use abstractions. In other 
 words, you should design your code in a way that allows you to change the
  low-level implementation details without affecting the high-level 
  functionality.


  For an instance, suppose we have 2 data services (users & configs) that connect to 2
   databases (MongoDB and DynamoDB) inside save`() functions as below. Now,
    you can’t change the underlying database logic without changing the
     data service classes — which is a violation of the Dependency Inversion
      Principle!

*/


{

    // ===== Bad Code =====

class UserService {

    save(data: any): void { // ===> DIP violation!
        // Connect to MongoDB
        // Save data
    }
}

class ConfigService {

    save(data: any): void { // ===> DIP violation!
        // Connect to DynamoDB
        // Save data
    }
}

  
    /**
     * Here’s how to improve the above code by separating the database logic
     *  from data services. The DataService is a high-level module that
     *  sends data to a DB client for saving. The MongoDBClient and
     *  DynamoDBClient are low-level modules that implement the actual
     *  details of how the data is saved. However, the DataService does 
     * not depend directly on these low-level modules. Instead, it depends
     *  on an abstraction (the DBClient interface) that is implemented by
     *  the low-level modules. This allows the DataService to work with any
     *  DB client, without being tied to a specific implementation. If you
     *  want to change the DB client that is used, you can simply swap out 
     * the low-level implementation without affecting the high-level 
     * functionality.
     */
    
    
}

{
    // ===== Good Code =====

interface DBClient {
    saveData(data: any): void;
}

class MongoDBClient implements DBClient {
    saveData(data: any): void {
        // code...
    }
}

class DynamoDBClient implements DBClient {
    saveData(data: any): void {
        // code...
    }
}

class DataService {
    constructor(private db: DBClient) {
    }

    save(data: any): void {
        this.db.saveData(data);
    }
}

const mongo = new MongoDBClient();
const dynamo = new DynamoDBClient();

const userService = new DataService(mongo);
userService.save({ /* user record */});

const configService = new DataService(dynamo);
configService.save({ /* config record */});
}