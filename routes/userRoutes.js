const express = require("express");
const router = express.Router();
const { authUser, registerUser } = require("../controllers/userController.js");
const { protect, admin } = require("../middleware/authMiddleware.js");

router.route("/").post(registerUser).get(protect, admin);
router.post("/login", authUser);

module.exports = router;
