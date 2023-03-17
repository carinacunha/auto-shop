# Shop Car #
![alt app](car.jpg "car img")

## About ##

In this project, Object Oriented Programming (OOP) principles were used to build an API with CRUD to manage vehicle driving. This was done using the MongoDB database through the Mongoose framework.

## Routes ##

1️⃣ Car Routes:

* POST /cars
  Responsible for registering the car in db.
* GET /cars
  Responsible for listing all cars.
* GET /cars/:id
Responsible for listing a specific car.
* PUT /cars/:id
Responsible for updating a specific car.

2️⃣ Motorcycles Routes:

* POST /motorcycles
  Responsible for registering the motorcycles in db.
* GET /motorcycles
  Responsible for listing all motorcycles.
* GET /motorcycles/:id
Responsible for listing a specific motorcycle.
* PUT /motorcycles/:id
Responsible for updating a specific motorcycle.

## Skills and Tools ##

* Application integration using Docker;
* Using environment variables;
* Write APIs using TypeScript, Node js. and Express;
* Develop the Back-end of the application using the MSC model;
* Create routes and apply middlewares;
* Use ORM Sequelize to CRUD the database;
* Use the Object Oriented Paradigm (OOP);
* Use the SOLID principle;
* Create unit tests using Jest, Mocha, Chai and Sinon libraries;

## Guidelines to runnig API ##

1. Clone the repository: ```git clone git@github.com:carinacunha/shop-car.git```
2. Navigate to the root of the repository: ```cd shop-car ```
3. Install the dependencies: ```npm install ```
4. Initialize the Docker containers: ```docker-compose up -d```
5. Run tests: ```npm run test```

**✨ This project was developed during the Full Stack Web Development course at Trybe**
