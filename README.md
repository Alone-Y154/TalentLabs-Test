# Talent Labs - Test - React Application

## Overview

This is a React-based web application for Talent Labs, hosted on Netlify. It includes user authentication with Google Sign-In and standard login/signup functionality. The project is built using React, with routing handled by React Router, and deployed on Netlify.

**Live Demo**: [https://talentlabs-test-web.netlify.app/](https://talentlabs-test-web.netlify.app/)

## Features

- **User Authentication**: 
  - Login and Signup using email and password.
  - Google Sign-In integration for a smooth login experience.
  
- **Routing**: 
  - Client-side routing using React Router.
  - Redirects and routing handling configured for Netlify.

- **Responsive Design**: 
  - Optimized for both desktop and mobile views.

### Backend

* Node.js
* Express.js
* MongoDB (or another database technology of your choice)

### Frontend

* React
* React Router
* Tailwind CSS (or another UI library/framework of your choice)

## API Endpoints

* **POST** `/api/auth/register`: Register a new user
  - **Request Body**: `{ name: String, email: String, password: String }`
  - **Response**: `{ message: String }`

* **POST** `/api/auth/login`: Authenticate a user
  - **Request Body**: `{ email: String, password: String }`
  - **Response**: `{ token: String, message: String }`

* **POST** `/api/auth/google-login`: Google Sign-In authentication
  - **Request Body**: `{ token: String }`
  - **Response**: `{ token: String, message: String }`

* **GET** `/api/user/profile`: Get user profile (protected)
  - **Headers**: `Authorization: Bearer <token>`
  - **Response**: `{ name: String, email: String }`

