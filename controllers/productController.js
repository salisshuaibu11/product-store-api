const asyncHandler = require("express-async-handler");
const Product = require("../models/product");

// @desc    Create Product
// @route   POST /api/product/create
// @access  Private

const productCreate = asyncHandler(async (req, res) => {
  try {
    const { name, price } = req.body;

    // validate request
    if (!name || !price) {
      return res.status(400).send({
        success: false,
        message: "Please enter product name and price",
      });
    }

    const product = await Product.create({
      name,
      price,
    });

    if (product) {
      res.send({
        success: true,
        data: product,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      status: 500,
      message:
        error.message || "Some error occurred while creating the product.",
    });
  }
});

module.exports = {
  productCreate,
};
