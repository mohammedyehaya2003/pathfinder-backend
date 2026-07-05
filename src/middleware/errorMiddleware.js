const errorMiddleware = (
  error,
  req,
  res,
  next
) => {
  console.error(error);

  res.status(error.status || 500).json({
  success: false,
  message:
    error.message ||
    "Internal Server Error",
  error: {
    status: error.status || 500,
  },
});

};

module.exports = errorMiddleware;