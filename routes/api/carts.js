var Product = require('../../models/Product');
var Cart = require('../../models/Cart');
const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get('/', passport.authenticate("jwt", {session: false}),
(req,res) => {
 var user = {
   id : req.user.id
 }
  Cart.find({ owner: req.user.id })
  .then(data => {
     if(data){
        res.json(data);
     } else{
       return res.status(400).json({error : "..."});
     }
  })
  .catch(err => console.log(err));

 }
 );

router.post('/purchaseProduct/:id', function(req, res, next) {
  Cart.findOne({ owner: req.user._id }, function(err, cart) {
    cart.items.push({
      item: req.body.id,
      price: parseFloat(req.body.price),
      quantity: parseInt(req.body.quantity)
    });

    cart.total = (cart.total + parseFloat(req.body.price)).toFixed(2);

    cart.save(function(err) {
      if (err) return next(err);
      return res.redirect('/cart');
    });
  });
});

router.post('/remove', function(req, res, next) {
  Cart.findOne({ owner: req.user._id }, function(err, foundCart) {
    foundCart.items.pull(String(req.body.item));

    foundCart.total = (foundCart.total - parseFloat(req.body.price)).toFixed(2);
    foundCart.save(function(err, found) {
      if (err) return next(err);
      req.flash('remove', 'Successfully removed');
      res.redirect('/cart');
    });
  });
});

module.exports = router;
