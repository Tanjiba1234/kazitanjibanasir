### **Project Overview**

- **Developer:** Kazi Tanjiba Nasir
- **Roll Number:** 20040047
- **Institution:** Rajshahi University of Engineering & Technology (RUET)
- **Purpose:** Backend for a web application where students can buy and sell books and electronics, demonstrating skills in backend development, RESTful API design, database management, and secure authentication.
- **Frontend Tech Stack:** React, Vite, React Router, Axios, React Hot Toast.
- **Backend Tech Stack (Assumed):** Node.js, Express, MongoDB, JWT, bcrypt.
- **Setup:** Clone the repo, set up the backend with MongoDB, install dependencies, and run both the backend and frontend.

---

### **Frontend Folder Structure**

The frontend folder structure is based on the provided screenshot and code snippets:

```
frontend/
├── node_modules/              # Dependencies installed via npm
├── public/                    # Static assets (e.g., images, favicon)
├── src/                       # Source code for the frontend
│   ├── components/            # Reusable React components
│   │   ├── common/            # Common components used across the app
│   │   │   ├── AdminRoute.jsx # Component for admin route protection
│   │   │   ├── ErrorBoundary.jsx # Component for error handling
│   │   │   ├── Footer.jsx     # Footer component
│   │   │   ├── Navbar.jsx     # Main navigation bar
│   │   │   ├── Newsletter.jsx # Newsletter subscription component
│   │   │   ├── ProtectedRoute.jsx # Component for protected routes
│   │   │   ├── ScrollToTop.jsx # Component to scroll to top on route change
│   │   │   └── TopNavbar.jsx  # Secondary navigation bar
│   │   ├── product/           # Product-related components
│   │   │   ├── ProductCard.jsx # Component to display a product card
│   │   │   ├── ProductModal.jsx # Modal for product details
│   │   │   └── ProductForm.jsx # Form for adding/editing products
│   ├── context/               # React Context for state management
│   │   ├── AuthContext.jsx    # Context for authentication
│   │   ├── CartContext.jsx    # Context for cart management
│   │   └── WishlistContext.jsx # Context for wishlist management
│   ├── layouts/               # Layout components for routing
│   │   ├── AdminLayout.jsx    # Layout for admin pages
│   │   └── MainLayout.jsx     # Main layout for the app (includes Navbar, Footer, etc.)
│   ├── pages/                 # Page components for different routes
│   │   ├── AboutPage.jsx      # About page
│   │   ├── AccountPage.jsx    # User account page
│   │   ├── AccountOrdersPage.jsx # Page for user orders
│   │   ├── AdminPage.jsx      # Admin dashboard page
│   │   ├── AdminPointsPage.jsx # Admin points management page
│   │   ├── AdminProductsPage.jsx # Admin product management page
│   │   ├── BooksPage.jsx      # Page to display books
│   │   ├── CartPage.jsx       # Cart page
│   │   ├── ContactPage.jsx    # Contact page
│   │   ├── ElectronicsPage.jsx # Page to display electronics
│   │   ├── HomePage.jsx       # Homepage
│   │   ├── LoginPage.jsx      # Login page
│   │   ├── OrderDetailsPage.jsx # Order details page
│   │   ├── OrdersPage.jsx     # Orders page
│   │   ├── RegisterPage.jsx   # Registration page
│   │   └── WishlistPage.jsx   # Wishlist page
│   ├── utils/                 # Utility functions and API setup
│   │   └── api.js             # Axios instance for API calls
│   ├── index.css              # Global CSS styles
│   ├── main.jsx               # Entry point for the React app
│   └── router.jsx             # Router configuration
├── .eslintrc                  # ESLint configuration
├── .gitignore                 # Git ignore file
├── index.html                 # Main HTML file for Vite
├── package-lock.json          # Lock file for npm dependencies
├── package.json               # Project metadata and dependencies
└── vite.config.js             # Vite configuration
```

---

### **Packages Used in the Frontend**

#### **Dependencies:**

1. **react** - Core React library.
2. **react-dom** - For rendering React components.
3. **react-router-dom** - For routing.
4. **axios** - For making HTTP requests.
5. **react-hot-toast** - For toast notifications.

#### **Dev Dependencies:**

1. **vite** - Build tool.
2. **@vitejs/plugin-react** - Vite plugin for React.
3. **eslint** - For linting.
4. **eslint-plugin-react** - ESLint plugin for React.

#### **Sample `package.json` for Frontend:**

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "axios": "^1.4.0",
    "react-hot-toast": "^2.4.1"
  },
  "devDependencies": {
    "vite": "^4.4.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.0.0",
    "eslint-plugin-react": "^7.32.0"
  }
}
```

---

### **Assumed Backend Folder Structure**

Since the backend details aren’t provided, I’ll assume a typical Node.js/Express setup with MongoDB, which aligns with the project’s purpose (RESTful API, database management, secure authentication). Here’s a hypothetical backend structure:

```
backend/
├── node_modules/              # Dependencies installed via npm
├── src/                       # Source code for the backend
│   ├── controllers/           # Request handlers
│   │   ├── authController.js  # Handles login/register
│   │   ├── productController.js # Handles product CRUD
│   │   ├── cartController.js  # Handles cart operations
│   │   ├── orderController.js # Handles orders
│   │   └── userController.js  # Handles user management
│   ├── models/                # Mongoose models
│   │   ├── User.js            # User schema
│   │   ├── Product.js         # Product schema
│   │   ├── Cart.js            # Cart schema
│   │   └── Order.js           # Order schema
│   ├── routes/                # API routes
│   │   ├── authRoutes.js      # Routes for authentication
│   │   ├── productRoutes.js   # Routes for products
│   │   ├── cartRoutes.js      # Routes for cart
│   │   ├── orderRoutes.js     # Routes for orders
│   │   └── userRoutes.js      # Routes for user management
│   ├── middleware/            # Custom middleware
│   │   ├── authMiddleware.js  # JWT authentication middleware
│   │   └── errorMiddleware.js # Error handling middleware
│   ├── config/                # Configuration files
│   │   └── db.js              # Database connection
│   └── server.js              # Entry point for the backend
├── .env                       # Environment variables (e.g., MongoDB URI, JWT secret)
├── .gitignore                 # Git ignore file
├── package-lock.json          # Lock file for npm dependencies
└── package.json               # Project metadata and dependencies
```

#### **Assumed Backend Dependencies:**

- **express** - Web framework for Node.js.
- **mongoose** - MongoDB object modeling.
- **jsonwebtoken** - For JWT-based authentication.
- **bcryptjs** - For password hashing.
- **dotenv** - For environment variables.
- **cors** - To enable CORS for frontend requests.
- **nodemon** (dev dependency) - For auto-restarting the server during development.

#### **Sample `package.json` for Backend:**

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.3.0",
    "jsonwebtoken": "^9.0.0",
    "bcryptjs": "^2.4.3",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.0"
  }
}
```

---

### **Project Installation and Setup Guide (Frontend + Backend)**

This section provides a step-by-step guide to install and set up the project, including both the frontend and backend.

#### **Prerequisites**

1. **Node.js and npm:** Ensure Node.js (v16 or later) and npm are installed. You can download them from [nodejs.org](https://nodejs.org/).
   - Verify installation:
     ```bash
     node -v
     npm -v
     ```
2. **MongoDB:** Install MongoDB locally or use a cloud service like MongoDB Atlas. For local installation, follow the instructions at [mongodb.com](https://www.mongodb.com/docs/manual/installation/).
   - If using MongoDB locally, ensure the MongoDB server is running:
     ```bash
     mongod
     ```
   - If using MongoDB Atlas, get the connection URI.
3. **Git:** Ensure Git is installed to clone the repository (if applicable).

#### **Step 1: Clone the Project Repository**

Assuming the project is hosted on a Git repository (e.g., GitHub), clone it:

```bash
git clone <repository-url>
cd <project-directory>
```

The project likely has two main folders: `frontend` and `backend`. If not, you may need to set up the backend separately based on the provided frontend.

#### **Step 2: Set Up the Backend**

1. **Navigate to the Backend Directory:**

   ```bash
   cd backend
   ```
2. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

   This installs `express`, `mongoose`, `jsonwebtoken`, `bcryptjs`, `dotenv`, `cors`, and `nodemon`.
3. **Set Up Environment Variables:**
   Create a `.env` file in the `backend` directory with the following content:

   ```env
   PORT=5000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

   - `MONGO_URI`: Your MongoDB connection string (e.g., `mongodb://localhost:27017/bookstore` for local, or a MongoDB Atlas URI).
   - `JWT_SECRET`: A secret key for JWT (e.g., `mysecretkey123`).
4. **Run the Backend Server:**
   Start the backend server using `nodemon` for development:

   ```bash
   npm run dev
   ```

   - If `nodemon` is not set up in `package.json`, add this to the `scripts` section:
     ```json
     "scripts": {
       "dev": "nodemon src/server.js",
       "start": "node src/server.js"
     }
     ```
   - The backend should now be running on `http://localhost:5000`.
5. **Verify Backend is Running:**
   Open a browser or use a tool like Postman to test an endpoint, such as `http://localhost:5000/api`. If the backend is set up correctly, you should see a response (e.g., a welcome message or an error if no route is defined).

#### **Step 3: Set Up the Frontend**

1. **Navigate to the Frontend Directory:**
   Open a new terminal (or navigate back from the backend directory):

   ```bash
   cd ../frontend
   ```
2. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

   This installs `react`, `react-dom`, `react-router-dom`, `axios`, `react-hot-toast`, and dev dependencies like `vite` and `@vitejs/plugin-react`.
3. **Run the Frontend Development Server:**
   Start the Vite development server:

   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:5173` (default Vite port). The `vite.config.js` file proxies API requests to the backend at `http://localhost:5000`.
4. **Verify Frontend is Running:**
   Open `http://localhost:5173` in your browser. You should see the homepage of the application. Try navigating to pages like `/login` or `/books` to ensure routing works.

#### **Step 4: Test the API Connection**

- The frontend is configured to make API requests to `http://localhost:5000/api` (as defined in `api.js` and `vite.config.js`).
- Test the connection by performing actions like:
  - Registering a new user (`/register` page).
  - Logging in (`/login` page).
  - Browsing products (`/books` or `/electronics` pages).
- If the backend is running and the API endpoints are set up correctly, the frontend should be able to fetch data (e.g., products) and perform actions (e.g., adding to cart).

#### **Step 5: Build for Production (Optional)**

1. **Backend Production Build:**

   - In the `backend` directory, run:
     ```bash
     npm run start
     ```
   - This starts the backend in production mode (without `nodemon`).
2. **Frontend Production Build:**

   - In the `frontend` directory, run:
     ```bash
     npm run build
     ```
   - This generates a `dist` folder with the optimized build.
   - To preview the production build locally:
     ```bash
     npm run preview
     ```
3. **Deploy (Optional):**

   - Deploy the backend to a platform like Heroku, Render, or a VPS.
   - Deploy the frontend to a platform like Netlify, Vercel, or GitHub Pages.
   - Update the `baseURL` in `frontend/src/utils/api.js` to point to the deployed backend URL (e.g., `https://your-backend-url/api`).

#### **Troubleshooting Tips**

- **Backend Not Running:** Ensure MongoDB is running and the `MONGO_URI` in `.env` is correct.
- **CORS Issues:** Ensure the backend has CORS enabled (using the `cors` package).
- **API Errors:** Check the browser console and backend logs for errors. Verify that the backend endpoints match the frontend requests.
- **Port Conflicts:** If `port 5000` or `port 5173` is in use, change the ports in `.env` (backend) or `vite.config.js` (frontend).

---

### **API Connection with Backend (Step by Step)**

1. **Set Up Axios Instance (`api.js`):**

   - Creates an Axios instance with `baseURL: "http://localhost:5000/api"`.
   - Sets default headers to `Content-Type: application/json`.
2. **Add Request Interceptor:**

   - Adds a Bearer token to the `Authorization` header if a token exists in `localStorage`.
3. **Add Response Interceptor:**

   - Handles errors like `401` (redirects to login) and `400` (logs bad requests).
4. **Proxy API Requests in Vite (`vite.config.js`):**

   - Proxies `/api` requests to `http://localhost:5000` to avoid CORS issues.
5. **Use the API in Components:**

   - Import the `api` instance and make requests (e.g., `api.get("/products")`).
6. **Ensure Backend is Running:**

   - The backend must be running on `http://localhost:5000` with matching API endpoints.
7. **Handle Authentication:**

   - The `AuthContext` manages the token, and `ProtectedRoute` ensures secure access to routes.

---
