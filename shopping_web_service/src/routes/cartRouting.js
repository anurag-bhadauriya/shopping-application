const express = require('express');
const cartRouter = express.Router();
const hooplaCartService = require('../service/cart');


//Adding to cartor remove to cart
cartRouter.put('/updateTheCart/:currentUser', (req, res, next)=>{
    // console.log("hi")
    var currentUser=req.params.currentUser;
    var obj=(req.body);
    console.log(obj);
    return hooplaCartService.updateTheCart(currentUser, obj).then( (data)=> {
        res.json({message:"Updated to the user cart"})
    }).catch( err=> { next(err) })
})

//To insert into the transaction table
cartRouter.post('/transaction', (req, res, next)=>{
    var transactionObj=(req.body);
    // console.log(transactionObj);
    return hooplaCartService.createtransaction(transactionObj).then (data=>{
        // res.json({ "message": "Order Successfull!! OrderId: "+data });
        res.json( {"message":data });
        // res.send(data); 
    }).catch(err => next(err))
})

//To get all the values of the transaction table of a particular user
cartRouter.get('/transaction/:currentuser', (req, res, next)=>{
    return hooplaCartService.gettransaction(req.params.currentuser).then((item) => {
        res.json(item);
    }).catch(err => next(err))
})

// For Checkout -Update quantity of purchased products
cartRouter.put('/updateQuantity', (req, res, next)=>{
    var products=(req.body);
     console.log(products);
    return hooplaCartService.updateProdQuantity(products).then (data=>{
        res.json(data);
    }).catch(err => next(err))
})





module.exports=cartRouter;

