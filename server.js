const express = require("express");
const cors = require("cors");

require("dotenv").config();
require("./src/db/db");

const authRoutes = require("./src/routes/authRoutes");
const authMiddleware = require("./src/middleware/authMiddleware");
const routeRoutes = require("./src/routes/routeRoutes");
const historyRoutes = require("./src/routes/historyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// Route Calculation Routes
app.use("/api/routes", routeRoutes);
app.use("/api/history", historyRoutes);

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});