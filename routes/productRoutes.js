const express = require("express");
const router = express.Router();

const { productCreate } = require("../controllers/productController");

router.post("/create", productCreate);

module.exports = router;
