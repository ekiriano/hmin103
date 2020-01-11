const express = require("express");
const router = express.Router();
const passport = require("passport");

const Category = require('../../models/Category');
const Product = require('../../models/Product');

router.get('/', function (req, res, next) {
    Category.find(function (err, categories) {
        if (err) return console.log(err);
        res.status(200).json(categories);
    });

});
/**
 * @route : /api/categories/:category
 *
 * */
router.get('/:category', function (req, res, next) {
    Category.findOne({title: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        Product.find({category: category.name}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
        });
    });
});

router.post('/',function (req,res,next) {
    const newCategory = new Category({
        name: req.body.name,
        description:req.body.description
    });

    newCategory.save()
        .then(newCategory => res.json(newCategory))
        .catch(err => console.log(err));

});

router.delete('/',function (req,res,next){

})


module.exports = router;
