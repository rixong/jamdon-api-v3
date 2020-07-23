# Jamdom - RESTful api

## Purpose

Jamdon api provides RESTful endpoints for storing and changing data for Jamdom (an web app that allows musicians to setup jam sessions wirth other musicians).

## Technology

Jamdom uses:
- Express v.4.17.1
- MongoDB v.3.5.9
- Mongoose v.5.9.23
- Validator v.13.1.1
- Bcryptjs v.2.4.3
- jsonwebtoken v.8.5.1
- env-cmd v.10.1.0

## Included models

Users - {email, password, firstname, lastname, instruments [], genres [], youtubeUrl}

7/22/2020:
Built out User model RESTful routes using Express.Router (Create User, Login, Logout, Logout from all devices, Read User profile, Patch, Delete)
Store hashed password via Bcrypt.
Create session token with JWT.




jamdon-api-v3
