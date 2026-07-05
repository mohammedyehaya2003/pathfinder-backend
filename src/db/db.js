require("dotenv").config();

const { Pool } = require("pg");

console.log("===== Railway Environment =====");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? "Loaded ✅" : "Missing ❌");

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
    console.log("Database Connection Failed:");
    console.log(error);
  }
};

if (process.env.NODE_ENV !== "test") {
  connectDB();
}

module.exports = pool;