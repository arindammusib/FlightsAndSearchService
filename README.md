Flights And Search Service
Folder Structure📁
- src
  - config
  - controllers
  - middlewares
  - migrations
  - models
  - seeders
  - services
  - respository
  - utils

- setUp express server🌏
- set up env
- set up middlewares(bodyparser)
- configure MySql server
    - install mysql2
    - install sequelize
    - install sequelize-cli
    - config basic sequelize set up
- Inside src/config/config.json add following piece of json
```
"development": {
    "username": "<My_DB login name>",
    "password": "<My_Password>",
    "database": "DB_NAME",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  ```

  #Db design
  - Airplane table
  - Flights
  - City
  - Airports

 - Inside models
   - created City db using sequelize
   - Added different properties in both models and migrations folder
- Inside repository
    - created City Repo
    - implemented  createCity and deleteCity


