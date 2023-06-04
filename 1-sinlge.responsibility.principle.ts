/*
#1 — Single Responsibility Principle

There should not be more than one reason for a class to change, meaning a
 class should always have only one single responsibility and do it well.

*/


// Bad Code
{

class Payroll {
    public calculatePay(): any {
        // Pay calculation logic
    }

    public savePayToDB(): any { // ===> SRP violation!
        // Create DB connection
        // Save record to DB
        // Close DB connection
    }
}
    

}

/* 
To improve this code, let’s move the DB operations to 2 new classes — DatabaseWriter
 and DatabaseConnector. As the name suggests, the DatabaseConnector class will have 
 the capabilities to handle connectivity (e.g. create/persist/close connections, read DB configs).
  The DatabaseWriter class will invoke the DatabaseConnector’s functions to get a connection to the
   database and write data into it.
*/


class Payroll {

    public calculatePay(): any {
        // Pay calculation logic
    }

    public savePay(): any {
        // Invoke DatabaseWriter.writeToDB()
    }

}

class DatabaseWriter {
    public writeToDB(): any {
        // Invoke DatabaseConnector.getConnection()
        // Save record to DB
        // Invoke DatabaseConnector.closeConnection()
    }
}

class DatabaseConnector {

    public getConnection(): any {
        // code...
    }

    public closeConnection(): any {
        // code...
    }
}