const express = require("express");
const router = express.Router();
const passport = require("passport");

// Validation
const validateProductInput = require("../../validation/Product");

// Product Model
const Product = require("../../models/Product");

/**
 * @route   POST /routes/api/admin/product/save
 * @desc    adding a product to be purchased
 * @access  Admin
 */
 router.post(
   "/product/save",
   passport.authenticate("jwt", { session: false }),
   (req, res) => {
     // const { errors, isValid } = validateProductInput(req.body);
     // // Check validation
     // if (!isValid) {
     //   console.log(errors); // at final es lint handle properly the errors and no logs
     //   return res.status(400).json(errors);
     // }

  const newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    brand: req.body.brand,
    color: req.body.color,
    price: req.body.price,
    quantity: req.body.quantity,
    model: req.body.model,
    taille: req.body.taille,
    images: req.body.images,
    category: req.body.category_id
  });

  product.save()
         .then(newProduct => res.json(newProduct))
         .catch(err => console.log(err))

});

/**
 * @route   DELETE /api/admin/product/:id
 * @desc    Delete products
 * @access  Admin
 */

router.delete(
  '/product/:id',
  passport.authenticate('jwt',{session:false}),
  (req,res) => {
      Product.findById(req.params.id)
      .then(product => {
        // check user is admin
        if(req.user.admin != true){
          return res.status(401).json({notauthorized : "User not authorized"});
        }
        //delete
        product.remove().then( () => res.json({success : true}));
      })
  }
);

module.exports = router;
