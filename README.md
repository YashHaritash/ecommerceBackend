# E-Commerce App README

This project is an e-commerce application built using Node.js and Express.js for backend APIs. Below are the main components and routes defined in the application:

## Controllers

### Authentication Controllers

- **POST /api/auth/register**
  - Endpoint for user registration.
- **POST /api/auth/login**
  - Endpoint for user login.
- **POST /api/auth/forgot-password**
  - Endpoint for handling forgot password requests.
- **GET /api/auth/test**
  - Example route requiring authentication and admin privileges.

### Category Controllers

- **POST /api/category/create-category**
  - Endpoint to create a new category (requires authentication and admin privileges).
- **PUT /api/category/update-category/:id**
  - Endpoint to update a category by ID (requires authentication and admin privileges).
- **GET /api/category/get-category**
  - Endpoint to fetch all categories.
- **GET /api/category/single-category/:slug**
  - Endpoint to fetch a single category by slug.
- **DELETE /api/category/delete-category/:id**
  - Endpoint to delete a category by ID (requires authentication and admin privileges).

### Product Controllers

- **POST /api/product/create-product**
  - Endpoint to create a new product (requires authentication and admin privileges).
- **GET /api/product/get-product**
  - Endpoint to fetch all products.
- **GET /api/product/single-product/:slug**
  - Endpoint to fetch a single product by slug.
- **GET /api/product/product-photo/:pid**
  - Endpoint to fetch a product's photo by product ID.
- **DELETE /api/product/delete-product/:pid**
  - Endpoint to delete a product by product ID (requires authentication and admin privileges).
- **PUT /api/product/update-product/:pid**
  - Endpoint to update a product by product ID (requires authentication and admin privileges).

## Middlewares

- **requireSignin**
  - Middleware to ensure user authentication.
- **isAdmin**
  - Middleware to check if the authenticated user is an admin.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Ensure MongoDB is running and configured correctly in `config.js`.
4. Customize error handling and logging as per project requirements.
5. Run the server using `npm start`.
6. Access different endpoints using tools like Postman or curl.

## Contact
For any queries, drop an email @ yaaash04@gmail.com

