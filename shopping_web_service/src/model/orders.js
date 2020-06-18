const hooplaOrderCollection = require('../utilities/ordersConnection');

const hooplaOrderDB={}

hooplaOrderDB.generateId = () => {
    return hooplaOrderCollection.getOrderCollection().then((model) => {
        return model.distinct("orderId").then((ids) => {
            let oId = Math.max(...ids);
            return oId + 1;
        })
    })
}

