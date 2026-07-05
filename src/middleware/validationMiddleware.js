const {
  body,
  validationResult,
} = require("express-validator");

// Register Validation Rules
const registerValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isLength({ min: 2 })
    .withMessage(
      "Name must be at least 2 characters"
    ),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
  .notEmpty()
  .withMessage("Password is required")
  .bail()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
  )
  .withMessage(
    "Password must be at least 8 characters and include one uppercase letter, one lowercase letter, and one number"
  ),
];

// Login Validation Rules
const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .bail()
    .isEmail()
    .withMessage("Invalid email format"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .bail()
    .isLength({ min: 8 })
    .withMessage(
      "Password must be at least 8 characters"
    ),
];

// Validation Result Middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: errors.array(),
    });
  }

  next();
};

module.exports = {
  registerValidation,
  loginValidation,
  validate,
};