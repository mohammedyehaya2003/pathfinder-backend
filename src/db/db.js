require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log("PostgreSQL Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed:", error.message);

    setTimeout(connectDB, 5000);
  }
};

// Don't connect to the database while running Jest tests
if (process.env.NODE_ENV !== "test") {
  connectDB();
}

module.exports = pool;