require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

pool.connect()
  .then(() => {
    console.log("PostgreSQL Connected Successfully");
  })
  .catch((error) => {
    console.log("Database Connection Failed:", error.message);
  });

module.exports = pool;