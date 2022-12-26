const express = require("express");
const Errand = require("../models/errandModel");
const router = express.Router();
const { createErrand, getErrands } = require("../controllers/errandController");

// create an errand
router.post("/api/errands", createErrand);

// get/read errands
router.get("/api/errands", getErrands);

module.exports = router;
