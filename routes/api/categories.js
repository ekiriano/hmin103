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
    console.log(req.body);
    const exerpt =  req.body.description.slice(0,250) + " ...";
    const newCategory = new Category({
        name: req.body.name,
        description:req.body.description,
        image:req.body.image === ""  ? 'holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail' : req.body.image,
        exerpt: exerpt
    });

    newCategory.save()
        .then(newCategory => res.json(newCategory))
        .catch(err => console.log(err));

});

router.delete('/',function (req,res,next){
    console.log(req.body);
    Category.findById(req.body.id)
        .then(category => {
            category.remove().then( () => res.json({success : true}));
        })
        .catch(err => res.status(404).json({error : "this category was not found"}));
});


module.exports = router;
