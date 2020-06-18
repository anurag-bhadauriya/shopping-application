const hooplaProductCollection = require('../utilities/productConnection');

const hooplaProductDb = {}

// Product Detail
hooplaProductDb.productDetail = (id) => {
    return hooplaProductCollection.getproductCollection().then(model => {
        return model.findOne({ "_id": id })
            .then(productData => {
                if (productData !== null) {
                    return productData
                } else return null
            })
    })
    // client.close();
}

// Products
hooplaProductDb.details = (category) => {
    return hooplaProductCollection.getproductCollection().then(model => {
        return model.find(
            { "pCategory": category }
        ).then(productData => {
            if (productData.length !=0 ) {
                return productData;
            } else return null;
        })
    })
}

//Product Search
hooplaProductDb.search = (productName) => {
    return hooplaProductCollection.getproductCollection().then(model => {
        return model.find( {"pName" : new RegExp(productName, 'i')} ).then(productData => {
            if (productData.length !=0 ) {
                return productData;
            } else return null;
        })
    })
}

module.exports = hooplaProductDb;
