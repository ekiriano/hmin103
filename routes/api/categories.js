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
 * @route : /api/categories/:category/products
 *
 * */
router.get('/:category/products', function (req, res, next) {
    Category.findOne({name: req.params.category}, function (err, category) {
        if (err) return console.log(err);
        console.log(category);
        Product.find({category_id: category.id}, function(err, products) {
            if(err) return console.log(err);
            res.status(200).json(products);
        });
    });
});

/**
 * @route : /api/categories/:category
 *
 * */
router.get('/:category',function (req,res,next){
    // console.log(req.params);
    Category.findOne({name : req.params.category},function (err,category) {
        if (err) return console.log(err);
        res.status(200).json(category);
    })
})

router.post('/',function (req,res,next) {
    console.log(req.body);
    const exerpt =  req.body.description.slice(0,250) + " ...";
    const newCategory = new Category({
        name: req.body.name,
        description:req.body.description,
        image:req.body.image,
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

router.put('/:category',async function (req,res,next){
    try {
        const exerpt = req.body.description.slice(0, 250) + " ...";
        const category = await Category.findOne({name: req.params.category});

        category.name = req.body.name,
            category.description = req.body.description,
            category.image = req.body.image,
            category.exerpt = exerpt;

        await category.save();
        await res.json(category);

    } catch(err) {
        console.error(err);
        res.status(500).send('Server Error');
    }

});

module.exports = router;
