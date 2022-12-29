const express = require("express");
const Errand = require("../models/errandModel");
const router = express.Router();
const { createErrand, getErrands, getErrand, deleteErrand, updateErrand } = require("../controllers/errandController");

/* Original code
// create an errand
router.post("/api/errands", createErrand);
// get/read all errands
router.get("/api/errands", getErrands);
// get/read one errand with a ROUTES PARAMETER FOR id!!
router.get("/api/errands/:id", getErrand);
router.delete("/api/errands/:id", deleteErrand);
router.put("/api/errands/:id", updateErrand);*/

// Same info: Refactored stage 1, see server.js for 1st step
/* router.post("/", createErrand);
router.get("/", getErrands);
router.get("/:id", getErrand);
router.delete("/:id", deleteErrand);
router.put("/:id", updateErrand); */

// Refactored stage 2
router.route("/").get(getErrands).post(createErrand);
router.route("/:id").get(getErrand).delete(deleteErrand).put(updateErrand);

module.exports = router;
