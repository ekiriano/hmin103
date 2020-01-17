const express = require("express");
const router = express.Router();

const Product = require('../../models/Product');
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

router.get('/', function (req, res, next) {
  Product.find(function (err, products) {
    if (err) return console.log(err);
    res.status(200).json(products);
  });

});

router.delete('/',function (req,res,next){
  Product.findById(req.body.id)
      .then(product => {
        product.remove().then( () => res.json({success : true}));
      })
      .catch(err => res.status(404).json({error : "this product was not found"}));
});

router.post('/',function (req,res,next) {
  console.log(req.body);
  const exerpt =  req.body.description.slice(0,250) + " ...";
  const newProduct = new Product({
    name: req.body.name,
    description:req.body.description,
    brand: req.body.brand,
    image:req.body.image,
    exerpt: exerpt,
    category_id: req.body.category,
    price: req.body.price,
  });

  newProduct.save()
      .then(newProduct => res.json(newProduct))
      .catch(err => console.log(err));

});

module.exports = router;
