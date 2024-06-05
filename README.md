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


## API

**USER**

This API handles user authentication, including login, signup, signout, and session management.
    
Endpoints:

1. User Login

  - URL: /user/login
  - Method: POST

    Description: Authenticates a user and creates a session.

        Request Body: 
            {
	            "username": "string",  
	            "password": "string"
            }

2. User Signup

  - URL: /user/signup
  - Method: POST

    Description: Registers a new user and creates a session.

        Request Body: 
            {
	            "username": "string",  
	            "password": "string"
            }

3. User Signout

  - URL: /user/signout
  - Method: POST

    Description: Logs out the current user.


**BOOKS**

Endpoints:

1. Create New Book

  - URL: /catalog
  - Method: POST

    Description: Creates a new book entry. Only accessible by the authenticated user.
    
        Request Body example: 
		{
			"name": "livro 4",
			"author": "author 4",
			"description": "desc 4",
			"comments": "comment 4",
			"imageFileName": "4_livro_4",
			"publisher": "publisher 4",
			"totalPages": 325,
			"pagesRead": 68,
			"year": 2020,
			"value": 232.10,
			"favorite": false,
			"rating": 5,
			"userId": 1
		} 

2. Get Books by User ID

  - URL: /catalog/:userId
  - Method: GET

	Description: Retrieves all books by the specified user ID. Only accessible by the authenticated user.

		Request Body: userId (URL parameter): The ID of the user.


3. Update Book

  - URL: /catalog
  - Method: PUT

	Description: Updates an existing book entry. Only accessible by the authenticated user.

		Request Body example:

 		{
		"name": "teste editing",
		"author": "teste",
		"description": "testeteste",
		"publisher": "teste",
		"year": 1,
		"totalPages": 111,
		"pagesRead": 11,
		"value": 44,
		"rating": 1,
		"favorite": true,
		"userId": 1,
		"bookId": 89,
		"imageFileName": "1_ed521ea3-b5de-4738-9359-ed3551f1500d.jpg"
	}

4. Delete Book by ID

  - URL: /catalog/:bookId
  - Method: DELETE

	Description: Deletes a book by its ID. Only accessible by the authenticated user.

		Request Parameters:

    	bookId (URL parameter): The ID of the book to be deleted.

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
