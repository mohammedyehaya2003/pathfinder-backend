const rateLimit = require("express-rate-limit");

const rateLimitMiddleware = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Maximum 100 requests per IP
  message: {
    success: false,
    message: "Too many requests. Please try again after 15 minutes.",
  },
});

module.exports = rateLimitMiddleware;