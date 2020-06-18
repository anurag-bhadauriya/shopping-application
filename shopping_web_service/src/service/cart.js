const hooplaCartDb = require('../model/cart');

const hooplaCartService = {}

//Adding to cart or remove to cart
hooplaCartService.updateTheCart=(currentUser, obj)=>{
    return hooplaCartDb.updateTheCart(currentUser, obj).then(data=>{
        if (data !=null) {
            return data;
        }
        else{
            let err = new Error("The mentioned product is not currently available.");
            err.status = 403;
            throw err;
        }
    })
}


hooplaCartService.createtransaction=(transactionObj)=>{
    return hooplaCartDb.createtransaction(transactionObj).then(data=>{
        if(data!=null){
            return data;
        }
        else {
            let err = new Error("Transaction Failed");
            err.status = 403;
            throw err;
        } 
    })
}

hooplaCartService.gettransaction=(currentuser)=>{
    return hooplaCartDb.gettransaction(currentuser).then(data=>{
        if(data!=null){
            return data;
        }
        else {
            let err = new Error("No Products Purchased");
            err.status = 403;
            throw err;
        }
    })
}

//To update the quantity of products after check out
hooplaCartService.updateProdQuantity=(products)=>{
    return hooplaCartDb.updateProdQuantity(products).then(data=>{
        if(data!=null){
            return data;
        }
        else{
            let err = new Error("Quantity Not Updated");
            err.status = 403;
            throw err;
        }   
    })
}


module.exports = hooplaCartService;