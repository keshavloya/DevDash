/* IMPORT REQUIRED MODULES */
const express = require("express");
const verifyToken = require("../middleware/verifyToken"); /* MIDDLEWARE TO VERIFY AUTHENTICATION TOKEN */
const {
  createApp,
  updateApp,
  getAllApps,
  deleteApp,
} = require("../controllers/appController");

const router = express.Router();

/* CREATING REQUIRED ROUTES */
router.put("/create", verifyToken, createApp);
router.patch("/update", verifyToken, updateApp);
router.get("/getAll/:userId", verifyToken, getAllApps);
router.delete("/delete", verifyToken, deleteApp);

module.exports = router;
