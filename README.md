# Try Hack Me task manager

This application;
 - Create a new task with all the necessary information
 - Implement a user-friendly way to display existing tasks
 - Has the ability to edit and delete tasks

## To Execute

### `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Authentication](#authentication)
3. [Endpoints](#endpoints)
    - [User Registration](#user-registration)
    - [User Login](#user-login)
    - [Get All Tasks](#get-all-tasks)
    - [Get a Single Task](#get-a-single-task)
    - [Create a Task](#create-a-task)
    - [Update a Task](#update-a-task)
    - [Delete a Task](#delete-a-task)

## Introduction

This project is a simple Node.js and Express application for managing tasks. The 
application allow users to create, read, update, and delete tasks and MongoDB for the database

## Authentication

To use this application for the first time use the [User Registration](#user-registration) endpoint to create a user (username and password are required).

## Endpoints

### User Registration

- **URL:** `/api/v1/auth/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Authentication:** Not required.
- **Request Body:** JSON object with user details (username, password).
- **Response:** JSON object with a success message or an error message.

### User Login

- **URL:** `/api/v1/auth/login`
- **Method:** `POST`
- **Description:** Log in a user and obtain an authentication token.
- **Authentication:** Not required.
- **Request Body:** JSON object with user credentials (username, password).
- **Response:** JSON object with an authentication token or an error message.

### Get All Tasks

- **URL:** `/api/v1/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Authentication:** Required (authentication token in the header).
- **Response:** JSON array of task objects.

### Get a Single Task

- **URL:** `/api/v1/task/:id`
- **Method:** `GET`
- **Description:** Retrieve a single task by its ID.
- **Authentication:** Required (authentication token in the header).
- **Response:** JSON object with task details or an error message.

### Create a Task

- **URL:** `/api/v1/task`
- **Method:** `POST`
- **Description:** Create a new task.
- **Authentication:** Required (authentication token in the header).
- **Request Body:** JSON object with task details (name, description, etc.).
- **Response:** JSON object with the created task or an error message.

### Update a Task

- **URL:** `/api/v1/task/:id`
- **Method:** `PUT`
- **Description:** Update an existing task by its ID.
- **Authentication:** Required (authentication token in the header).
- **Request Body:** JSON object with updated task details (name, description, etc.).
- **Response:** JSON object with the updated task or an error message.

### Delete a Task

- **URL:** `/api/v1/task/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.
- **Authentication:** Required (authentication token in the header).
- **Response:** JSON object with a success message or an error message.


## Usage

To run this application locally:

1. Clone this repository.

2. Navigate to the project directory in your terminal.

3. Install the dependencies using `npm install` or `yarn install`.

4. Start the development server using `npm start` or `yarn start`.

5. Access the application in your web browser at `http://localhost:4000`.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code for your own purposes.

---

This README provides a high-level overview of the React application. For detailed documentation and specific implementation details, please refer to the source code and comments within the project files.