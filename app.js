const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const authRoutes = require("./src/routes/authRoutes");
const authMiddleware = require("./src/middleware/authMiddleware");
const rateLimitMiddleware = require("./src/middleware/rateLimitMiddleware");
const errorMiddleware = require("./src/middleware/errorMiddleware");
const routeRoutes = require("./src/routes/routeRoutes");
const historyRoutes = require("./src/routes/historyRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(rateLimitMiddleware);
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/history", historyRoutes);
app.use("/api/users", userRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("PathFinder Backend Running");
});

// Protected Route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Protected Route Accessed",
    user: req.user,
  });
});

// Global Error Handler
app.use(errorMiddleware);

module.exports = app;