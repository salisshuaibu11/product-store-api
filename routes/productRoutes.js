const express = require("express");
const router = express.Router();

const {
  productCreate,
  getProducts,
} = require("../controllers/productController");

router.get("/", getProducts);
router.post("/create", productCreate);

module.exports = router;
