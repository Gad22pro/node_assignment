title: Node.js Backend API Assignment
---------------------------------------
GROUP MEMBERS : JONIS ,
                tASNIM ,
                LISANDRO ,
                GAD .
                
  PROJECT DESCRIPTION:
  --------------------
  This project is a backend application built using Node.js and Express.js.
  It provides a RESTful API that allows users to perform CRUD operations
  (Create, Read, Update, Delete) on data stored in a database. The system demonstrates
  how backend services communicate with a database and expose data through 
  API endpoints that can be tested using tools like Postman or Thunder Client.

  TECHNOLOGIES USED:
  -------------------
 . Node.js – JavaScript runtime environment
. Express.js – Web framework for building APIs
. MySQL – Database management system
. phpMyAdmin – Database administration tool
. npm – Package manager
. Postman / Thunder Client – API testing tools

   DATABASE SETUP STEPS:
   ----------------------
. Open phpMyAdmin in your browser
. Create a new database named:  db
. Select the database and create a table:
CREATE TABLE users (
    id int AUTO_INCREMENT PRIMARY KEY,
    name varchar(100),
    email varchar(100) UNIQUE,
    age int(3),
    salary decimal(10, 2),
    is_active boolean DEFAULT true
)
   API ENDPOINT LIST:
   ------------------
   | Method | Endpoint         | Description           |

 GET       `/api/users`          Retrieve all users    
 GET       `/api/users/:id`      Retrieve a user by ID 
 POST      `/api/users`          Add a new user        
 PUT       `/api/users/:id`      Update user details   
 DELETE    `/api/users/:id`      Delete a user         

   HOW TO RUN THE PROJECT LOCALLY:
   --------------------------------
 1, Clone the repository:
-- git clone https://github.com/gad22pro/node_assignment.git
2, Navigate into the project folder:
-- cd node_assignment
 3,Install dependencies:
-- npm install
4, Configure database connection in the project
5, Start the server:
-- nodemon server.js
6, Open your browser or Postman and test:
-- http://localhost:5000/api/users

