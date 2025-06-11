This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.


`src`→ Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the 'src' folder

`config`→ In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` → In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` → they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

`controllers` → they are kind of the last middlewares as post them you call you business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once busines layer returns an output, we structure the API response in controllers and send the output.


if someone from index.js give /api -> go api Routes ->  then in API Routes if someone give V1 OR V2 give v1Routes and V2 Routes.
and in both the route we have info.

- `repositories` -> this folder contains all the logic using which we interact the DB by writing queries , all the raw queries or ORM queries will go here.
            ORM -> It simplifies database interaction by allowing developers to work with database data as if they were using objects in their programming language, without directly writing SQL queries. 

- `services` -> contains the business logic and interacts with repositories for data from the database 

- `utils`-> contain helper methods , error classes etc.

install sequelize(it's a ORM) -> b/c help to convert SQL queries( database -> MY SQL, Maria DB , Oracle SQL) to OOP code 

        for further sequalize needs diff interfaces to connect to the database , so install driver b/c automatically understand that yhis kind of a database is going to be connected and what code or what coding implementation it needs it will directly fetch it from these drivers and connect to your database So,integrate MY SQL (npm intall mysql2)

        sequalize/cli  -> help to connect to a database.

        cd src
        npx sequelize init

        created "config/config.json"
        created folder models
        created folder migration
        created folder seeders


#Setup 
- Download this template from Github and open it in your favourite text editor .
- In the root directory create a `.env` file and add the following env variable
    example port 3000;
    
- Inside the src config folder create a file named as config json and write the following code:-
        {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

        If you are setting up your development environment then write the username of your `DB`, password of your ``DB`` and in dialect mention whatever `DB` you are using for example mysql Mario db Portuguese etc.

        If you are setting up test or production environment make sure you also replace the host with the hosted `DB` URL.