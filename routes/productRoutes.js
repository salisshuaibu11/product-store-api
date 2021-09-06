const express = require("express");
const router = express.Router();

const { productCreate } = require("../controllers/product");

router.post("/create", productCreate);

module.exports = router;
