const express = require("express");
const Errand = require("../models/errandModel");
const router = express.Router();
const { createErrand, getErrands, getErrand, deleteErrand } = require("../controllers/errandController");

// create an errand
router.post("/api/errands", createErrand);
// get/read all errands
router.get("/api/errands", getErrands);
// get/read one errand with a ROUTES PARAMETER
router.get("/api/errands/:id", getErrand);
router.delete("/api/errands/:id", deleteErrand);

module.exports = router;
