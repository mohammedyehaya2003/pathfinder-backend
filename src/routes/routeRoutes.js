const express = require("express");

const {
  calculateRoute,
} = require("../controllers/routeController");

const router = express.Router();

router.post("/calculate-route", calculateRoute);

module.exports = router;