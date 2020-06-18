const express = require('express');
const productRouter = express.Router();
const hooplaProductService = require('../service/products');

//Product Detail
productRouter.get('/productDetail/:id', function (req, res, next) {
    return hooplaProductService.productDetail(req.params.id).then((item) => {
        console.log(item);
        res.json(item);
    }).catch(err => next(err))
});

//Products
productRouter.get('/:category', function (req, res, next) {
    return hooplaProductService.details(req.params.category).then((item) => {
        console.log(item);
        res.json(item);
    }).catch(err => { next(err); })
});

//Product Search
productRouter.get('/search/:productName', function (req, res, next) {
    return hooplaProductService.search(req.params.productName).then((item) => {
        console.log(item);
        res.json(item);
    }).catch(err => next(err))
});



module.exports = productRouter;
