
---

### README.md

```markdown
# Student Book & Electronics Sell-and-Buy Backend

This is the backend for a student-focused e-commerce platform where users can buy and sell books and electronics. The project, named Student Book & Electronics Sell-and-Buy Website, is built using Node.js, Express, and MongoDB, with JWT-based authentication and bcrypt for password hashing. It provides features like user authentication, product management, cart, orders, and wishlist functionality tailored for students.

## Project Details

This project was developed by Kazi Tanjiba Nasir as part of her 3rd Year, 2nd Semester academic project.  
- Roll Number: 20040047  
- Institution: Rajshahi University of Engineering & Technology (RUET)  
- Purpose: This project serves as the backend for a web application where students can buy and sell books and electronics. It demonstrates skills in backend development, RESTful API design, database management, and secure authentication.

## Folder Structure

```

```
backend/
│
├── config/                    # Configuration files
│   └── db.js                  # MongoDB connection setup
│
├── controllers/               # Request handlers (controllers)
│   ├── authController.js      # Authentication-related logic (login, register, etc.)
│   ├── cartController.js      # Cart management logic
│   ├── orderController.js     # Order management logic
│   ├── productController.js   # Product management logic (books and electronics)
│   ├── userController.js      # User management logic
│   └── wishlistController.js  # Wishlist management logic
│
├── middleware/                # Custom middleware
│   ├── auth.js               # Authentication middleware (JWT verification)
│   └── errorHandler.js       # Error handling middleware
│
├── routes/                    # API routes
│   ├── authRoutes.js          # Authentication routes (e.g., /api/auth/register)
│   ├── cartRoutes.js          # Cart routes (e.g., /api/cart)
│   ├── orderRoutes.js         # Order routes (e.g., /api/orders)
│   ├── productRoutes.js       # Product routes (e.g., /api/products)
│   ├── userRoutes.js          # User routes (e.g., /api/users)
│   └── wishlistRoutes.js      # Wishlist routes (e.g., /api/wishlist)
│
├── utils/                     # Utility functions (if any)
│
├── .env                       # Environment variables (not tracked in git)
├── .gitignore                 # Files and folders to ignore in git
├── package-lock.json          # Dependency lock file
├── package.json               # Project metadata and dependencies
└── server.js                  # Entry point of the application
```

```

## Endpoints

Below is a list of the main API endpoints, tailored for a student-focused buy-and-sell platform for books and electronics.

### Authentication (/api/auth)
- `POST /api/auth/register` - Register a new student user
- `POST /api/auth/login` - Login a user and return a JWT token

### Users (/api/users)
- `GET /api/users/profile` - Get the logged-in student's profile (Protected)
- `PUT /api/users/profile` - Update the logged-in student's profile (Protected)

### Products (/api/products)
- `GET /api/products` - Get all products (books and electronics)
- `GET /api/products/:id` - Get a product by ID
- `POST /api/products` - Create a new product listing (e.g., book or electronic item) (Protected)
- `PUT /api/products/:id` - Update a product listing (Protected, must be the owner)
- `DELETE /api/products/:id` - Delete a product listing (Protected, must be the owner)

### Cart (/api/cart)
- `GET /api/cart` - Get the user's cart (Protected)
- `POST /api/cart` - Add a product (book or electronic) to the cart (Protected)
- `DELETE /api/cart/:id` - Remove a product from the cart (Protected)

### Orders (/api/orders)
- `GET /api/orders` - Get the user's purchase/sell orders (Protected)
- `POST /api/orders` - Create a new order to buy a product (Protected)
- `GET /api/orders/:id` - Get an order by ID (Protected)

### Wishlist (/api/wishlist)
- `GET /api/wishlist` - Get the user's wishlist (Protected)
- `POST /api/wishlist` - Add a product to the wishlist (Protected)
- `DELETE /api/wishlist/:id` - Remove a product from the wishlist (Protected)

Note: Protected routes require a valid JWT token in the `Authorization` header as `Bearer <token>`.

## Packages Used

### Dependencies
- `bcryptjs`: For hashing passwords securely.
- `cors`: To enable Cross-Origin Resource Sharing.
- `dotenv`: To load environment variables from a `.env` file.
- `express`: Web framework for building the API.
- `jsonwebtoken`: For generating and verifying JWT tokens.
- `mongodb`: MongoDB driver for Node.js to interact with the database.

### Dev Dependencies
- `nodemon`: For automatically restarting the server during development.

## Setup Instructions

Follow these steps to set up and run the project on your local machine.

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or a MongoDB Atlas URI)
- Git (to clone the repository)

### Steps

1. Clone the Repository
   ```bash
   git clone <repository-url>
   cd backend
```

2. Install Dependencies
   Install the required packages using npm:

   ```bash
   npm install
   ```
3. Set Up Environment Variables
   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/techBazar
   JWT_SECRET=b4d8f1a3-9e7c-4d6b-bf72-1a2c5e8d9f0b
   JWT_EXPIRE=30d
   ```

   - `PORT`: The port on which the server will run.
   - `MONGODB_URI`: Your MongoDB connection string (update if using MongoDB Atlas). You can also rename the database from `techBazar` to something more relevant, like `studentMarket`.
   - `JWT_SECRET`: A secret key for signing JWT tokens (you can generate a new one).
   - `JWT_EXPIRE`: The expiration time for JWT tokens (e.g., `30d` for 30 days).
4. Start MongoDB
   Ensure MongoDB is running on your machine. If using a local instance:

   ```bash
   mongod
   ```

   If using MongoDB Atlas, ensure your `MONGODB_URI` is correctly set in the `.env` file.
5. Run the Application
   Start the server in development mode using the `npm run dev` script (which uses `nodemon`):

   ```bash
   npm run dev
   ```

   Alternatively, start the server directly without `nodemon`:

   ```bash
   node server.js
   ```
6. Test the API
   The server should be running on `http://localhost:5000`. You can use tools like Postman or cURL to test the endpoints.

### Example Request

To test the login endpoint:

```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"email": "student@example.com", "password": "yourpassword"}'
```

## Contributing

Feel free to fork this repository, create a feature branch, and submit a pull request. Ensure your code follows the existing style and includes appropriate tests.

## License

This project is licensed under the ISC License. See the `LICENSE` file for details.

## Acknowledgments

This project was created as part of an academic requirement for the 3rd Year, 2nd Semester at Rajshahi University of Engineering & Technology (RUET) by Kazi Tanjiba Nasir. Special thanks to her instructors and peers at RUET for their support and guidance.
