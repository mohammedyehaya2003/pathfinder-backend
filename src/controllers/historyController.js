const pool = require("../db/db");

const getHistory = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM routes_history ORDER BY created_at DESC"
    );

    res.status(200).json({
      message: "History Fetched Successfully",
      history: result.rows,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getHistory,
};