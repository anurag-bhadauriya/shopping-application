# shopping-application

Prerequisites:
1. NodeJS 
2. Angular7 or above
3. MongoDB on port 27017 preferably

## Starting the backend server
NOTE: All backend related code is present in shopping_web_service

1. Open command prompt inside "shopping_web_service"
2. Run command "npm install" (This will install the node modules inside the project)
3. Navigate to directory "shopping_web_service/src" in commad prompt
4. Run command "node app.js" (This will start the backend server at port 3000)
   
## Setting up the DB with dummy data (only if you are setting up the project for the first time)
NOTE: The backend assumes that the Mongodb server is running on port 27017 of your machine. Pls make sure of port and that the mongodb server is running

1. Start the backend server using above method.
2. Open the browser and hit the url "https://localhost:3000/setupDb" (This will create a DB named HooplaDb and also put some data on it). "Insertion succssfull" will come up once insertion is done.
3. For confirmation you can check up your mongodb collections for the hooplaDB database.
   

## Setting up the UI project (Angular based)

1. Open command prompt inside "shopping_ui" directory.
2. Run command "npm install" (This will install all the required dependencies for the ui project)
3. Run command "ng serve" in "shopping_ui" directory (This will start the ui project on port 4200).
   Once project is compiled you can access it using url "http://localhost:4200".

## Running full application

1. Start the mongodb server (If it is not already running)
2. Start the backend server
3. Start the ui server

## Running over Https

https://fmoralesdev.com/2020/01/03/serve-angular-app-over-https-using-angular-cli/

1. Create Trusted certificate for machine.
2. Install created certificate
3. Put certificate genertaed certificate files on required directory.
