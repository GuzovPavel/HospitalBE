const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/auth");

const {
  getAllVisits,
  createNewVisit,
  deleteVisit,
  changeVisit
} = require("../controllers/visit.controller");

router.get("/allVisits", authMiddleware, getAllVisits);

router.post("/newVisit", authMiddleware, createNewVisit);

router.patch("/changeVisit", authMiddleware, changeVisit)

router.delete("/deleteVisit", authMiddleware, deleteVisit);

module.exports = router;