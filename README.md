# 13 Object-Relational Mapping (ORM): E-Commerce Back End

## Description

This project is the back-end of an e-commerce application.  It stores data about which products are in stock, as well as the categories these products fall under, and has descriptive tags which are attached to the products.  The site allows users to access this data on the server, as well as make changes to the data, such as adding, editing, or deleting products, tags, and categories.  Through creating this project, I learned to use sequelize to work with a database.  This involved creating Models which lay out rules that the data must adhere to, and using sequelizes built in functionality to find, create, update, and destroy objects in the MYSQL database.  This project also allowed me to practice working with modular routing with express.js, as well creating the appropriate functionality for each of my server's api routes.  Additionally, I learned to use the dotenv package, storing my MYSQL login securely in an environment variable with a .env file.

## Installation

First, run "npm install" to install the project's dependencies through Node.
Then, from the terminal in the db folder, run "mysql -u root -p" and enter your password when prompted.
Next, run "source schema.sql" to set up our database.
After that, you can move back into the project's main folder and run "node seeds/index.js" to seed the database, and finally run "npm start" in the terminal to start the application.

## Usage

After starting the application using the "npm start" command in the terminal, the server will be running on Port 3001.  You can access it using http://localhost:3001/, but you will need to look in the routes/api/ files (or watch the video below!) to find the individual routes and requests you would like to use.
For example, visiting http://localhost:3001/api/products or making a GET request in Insomnia to that route, will allow you to see all of the products listed on the site, along with their associated Category and Tag information.

Watch the video linked below to see the application in action:
https://watch.screencastify.com/v/uxbzIL2uW3ncFOV1m1Y0

## Credits

This application used Node.js, the MYSQL2 package, Sequelize, Express.js, and dotenv.  I also used DBeaver to view my database as it developed.
This application was developed using starter code from Columbia's Full-Stack Web Development Bootcamp.

## License

See LICENSE.TXT file in repository.

---

