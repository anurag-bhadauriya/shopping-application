const hooplaProductCollection = require('../utilities/productConnection');
const hooplaUserCollection = require('../utilities/userConnection');
const hooplaOrderCollection = require('../utilities/ordersConnection')

const hooplaCartDb = {}

//Add to cart or remove to cart
hooplaCartDb.updateTheCart = (currentUser, obj) => {
    console.log("cart MOdel-->", obj);
    return hooplaUserCollection.getUserCollection().then(userModel => {
        return userModel.findOne( {"uCredentials.uEmail":currentUser } ).then( data => {
            if (data) {
                return userModel.updateOne( {"uCredentials.uEmail": currentUser }, { "uCart":obj } ).then( data => {
                    if (data.nModified==1) return data;
                    else return null;
                })
            } return null;
        })
    })
}
        

hooplaCartDb.updateCart = (userEmail) => {
    return hooplaUserCollection.getUserCollection().then(model => {
        return model.updateOne({ "uCredentials.uEmail": userEmail },
            { $set: { "uCart": [] } }).then(data => {
                if (data.nModified == 1) {
                    // console.log("modified");

                    return data;
                }
                else return { nModified:0 };
            })
    })
}

hooplaCartDb.generateId = () => {
    return hooplaOrderCollection.getOrderCollection().then((model) => {
        return model.distinct("orderId").then((ids) => {
            let bId = Math.max(...ids);
            return bId + 1;
        })
    })
}

hooplaCartDb.createtransaction = (transactionObj) => {
    return hooplaOrderCollection.getOrderCollection().then((model) => {
        // console.log("a");
        return hooplaCartDb.generateId().then(id => {
            // console.log(id);
            transactionObj.orderId = id;
            return model.insertMany(transactionObj).then(data => {
                if (data != null) {

                    return hooplaCartDb.updateCart(transactionObj.userEmailId).then(data => {
                        if (data.nModified == 1) {
                            return id
                        }
                        else {
                            return null;
                        }
                    })
                }
            })
        })
    })
}

//To cteate a transaction


hooplaCartDb.gettransaction = (currentuser) => {
    return hooplaOrderCollection.getOrderCollection().then((model) => {
        return model.find({ userEmailId: currentuser }, {_id:0, createdAt:0, updatedAt:0 } ).then(data => {
            console.log(data);
            if (data.length != 0) {
                return data;
            }
            else {
                return null;
            }
        })
    })
}


hooplaCartDb.updateProdQuantity = (products) => {
    return hooplaProductCollection.getproductCollection().then((model) => {
        return model.updateMany({ _id: products.pid },
        { $inc: { "pSeller.pQuantity": -products.qty } }).then(data => {
            if (data.nModified >= 1) {
                // console.log("modified");
                return "Quantity Updated";
            }
            else return null;
        })
    })
}


module.exports = hooplaCartDb;
