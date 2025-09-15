User Authentication & Authorization (Bearer Token)

A Node.js + Express.js application demonstrating user registration, login, and protected routes using JWT Bearer tokens.
Follows the MVC pattern with MongoDB (Mongoose) as the database.

Features

Register new users with hashed passwords (bcrypt).

Login to receive a signed JWT (JSON Web Token).

Protected route that returns user info only if a valid Bearer token is provided.

Input validation using express-validator.

Clean folder structure: models, controllers, routes, middlewares, config.

Tech Stack

Node.js / Express.js – API & routing

MongoDB / Mongoose – Database 

JWT (jsonwebtoken) – Authentication

bcryptjs – Password hashing

express-validator – Request validation

Postman – API testing