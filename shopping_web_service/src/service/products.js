const hooplaProductDb = require('../model/products');

const hooplaProductService = {}

hooplaProductService.productDetail = (id) => {
    console.log("product", id);
    return hooplaProductDb.productDetail(id).then(productData => {
        if (productData) return productData;
        else {
            let err = new Error("Invalid Product Id");
            err.status = 403;
            throw err;
        }
    })
}

hooplaProductService.details = (category) => {
    console.log("category", category);
    return hooplaProductDb.details(category).then(data => {
        if (data) return data;
        else {
            let err = new Error("Invalid category");
            err.status = 403;
            throw err;
        }
    })
}

hooplaProductService.search = (productName) => {
    console.log("product name", productName);
    
    return hooplaProductDb.search(productName).then(data => {
        if (data) return data;
        else {
            let err = new Error("Product not found");
            err.status = 403;
            throw err;
        }
    })
}

module.exports = hooplaProductService;