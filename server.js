const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const multer = require("multer");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");
const contactRoutes = require("./routes/contactRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configure Multer to save files to disk
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Ensure this directory exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            // console.log("Multer file filter passed:", file.originalname);
            cb(null, true);
        } else {
            cb(new Error("Only image files are allowed"), false);
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

connectDB();

// Serve the uploads directory statically
app.use("/uploads", express.static("uploads"));

// Configure CORS with more options
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Type", "Content-Length"],
    }),
);

app.use(express.json());

// Apply Multer middleware for product POST requests
app.use(
    "/api/products",
    (req, res, next) => {
        if (req.method === "POST") {
            // console.log("Processing POST /api/products with Multer");
            upload.single("image")(req, res, (err) => {
                if (err instanceof multer.MulterError) {
                    console.error("Multer error:", err);
                    return res.status(400).json({
                        success: false,
                        message: `Multer error: ${err.message}`,
                    });
                } else if (err) {
                    console.error("File upload error:", err);
                    return res.status(400).json({
                        success: false,
                        message: err.message,
                    });
                }
                // console.log(
                //     "Multer processed file:",
                //     req.file
                //         ? {
                //             originalname: req.file.originalname,
                //             size: req.file.size,
                //             mimetype: req.file.mimetype,
                //             path: req.file.path,
                //         }
                //         : "No file received",
                // );
                next();
            });
        } else {
            next();
        }
    },
    productRoutes,
);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contact", contactRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Hello, I am live");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Server running on http://localhost:${PORT}/`);
});