const pool = require("../db/db");

const updateProfile = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const result = await pool.query(
      `UPDATE users
       SET name = $1,
           email = $2
       WHERE id = $3
       RETURNING *`,
      [name, email, req.user.id]
    );

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      data: {
        user: result.rows[0],
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateProfile,
};