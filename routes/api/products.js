const express = require("express");
const router = express.Router();
const passport = require("passport");

/**
 * @route   GET /routes/api/products/:id
 * @desc    display a specific product
 * @access  Public
 */
router.get('/:id', function (req, res, next) {
  Product.findById(req.params.id, function (err, product) {
    if (err) return console.log(err);
    res.status(200).json(product);
  })
});

module.exports = router;
