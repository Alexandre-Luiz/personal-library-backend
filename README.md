# Personal Library App

This is a web application that allows users to manage their book collection. Users can log in, add, edit, delete, and favorite books, as well as filter their collection using various methods.
Should be run with the [frontend project](https://github.com/Alexandre-Luiz/personal-library-frontend).

## Features

- User authentication (login/logout) and session
- Add new books to the collection
- Edit existing book details
- Delete books from the collection
- Mark books as favorites
- Generate statistics from the collection (value, books read, pages, etc)
- Filter books by various criteria (e.g., title, author, genre, etc.)

## Prerequisites

Before running the application, ensure that you have the following software installed:

- Node.js (v16)
- PostgreSQL

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: `npm install`
4. Create a PostgreSQL database and update the `.env` (rename .env_example) file with your database credentials:
	* DB_USER=your_database_user
	* DB_PASS=your_database_password
6. Also, generate a random string for the `SESSION_SECRET` variable in the `.env` file:

## Usage

To start the development server, run: `npm run server`. This will start the server at `http://localhost:3001`.

## License

This project is licensed under the [MIT License](LICENSE).
