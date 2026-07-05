const pool = require("../db/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [name, email, hashedPassword]
    );

    res.status(201).json({
  success: true,
  message: "User Registered Successfully",
  data: {
    user: result.rows[0],
  },
});

  }catch (error) {
  next(error);
}
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    console.log("Email:", email);
console.log("Password:", password);

    const result = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const user = result.rows[0];

    console.log("Database User:", user);

const isMatch = await bcrypt.compare(
  password,
  user.password
);

console.log("Password Match:", isMatch);

if (!isMatch) {
  return res.status(401).json({
    message: "Invalid Credentials",
  });
}

const token = jwt.sign(
  {
    id: user.id,
    email: user.email,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1d",
  }
);

   res.status(200).json({
  success: true,
  message: "Login Successful",
  data: {
    token,
  },
});

  } catch (error) {
  next(error);
}
};;

module.exports = {
  register,
  login,
};