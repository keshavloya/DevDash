/* IMPORT REQUIRED MODULES */
const express = require("express");
const {
  login,
  register,
  resetPassword,
  googleLogin,
  verifyToken,
} = require("../controllers/authController");

const router = express.Router();

/* CREATING REQUIRED ROUTES */
router.post("/login", login);
router.post("/register", register);
router.post("/googleLogin", googleLogin);
router.patch("/resetPassword", resetPassword);
router.get("/:userId/verify/:token", verifyToken);

module.exports = router;
