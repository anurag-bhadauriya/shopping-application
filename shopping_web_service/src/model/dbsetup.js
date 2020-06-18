const collection = require('../utilities/userConnection');
const pcollection = require('../utilities/productConnection');
const transcollection=require('../utilities/ordersConnection');

orderData = [
    {
        "userEmailId": "just_to_generate_first_orderId",
        "price": null,
        "orderId": 2000,
        "orderDate": null,
        "products": null
      }
]

userData = [
    {
        "uCredentials": {
            "uEmail": "lucky@gmail.com",
            "uPass": "lucky"
        },
        "uProfile": {
            "uName": "Lucky",
            "uDOB": "2018-06-08",
            "uPhone": 1234567890,
            "uIsSeller": false,
            "uDateJoined": new Date("2019-01-24T04:21:00.760Z"),
            "uLastLogin": new Date("2019-01-24T11:30:28.340Z")
        },
        "uCart": [],
        "uAddress": [{
            "line1": "door no 4",
            "line2": "6th main road, near ganesh temple",
            "line3": "Mysore-538292, Karnataka"
        },
        {
            "line1": "house no 729",
            "line2": "gokulam 3rd stage, 13th cross",
            "line3": "Mysore-05, Karnataka"
        }]
    }
]

productData = [
    {
        "_id": "1001",
        "pName": "Asus Zenfone",
        "pDescription": "an economical phone by Asus",
        "pRating": 3.5,
        "pCategory": "Electronics",
        "price": 11599,
        "color": "Black",
        "image": "asus.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Asus@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },

    {
        "_id": "1002",
        "pName": "Redmi Note 2",
        "pDescription": "an economical phone by Xiaomi",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 8599,
        "color": "Black",
        "image": "redmi.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Xiaomi@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },

    {
        "_id": "1003",
        "pName": "Moto G turbo",
        "pDescription": "an economical phone by Moto",
        "pRating": 4,
        "pCategory": "Electronics",
        "price": 13599,
        "color": "Black",
        "image": "moto.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Moto@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },


    {
        "_id": "1004",
        "pName": "Lenovo Vibe X3",
        "pDescription": "a high end phone by Lenovo",
        "pRating": 4.5,
        "pCategory": "Electronics",
        "price": 19999,
        "color": "Black",
        "image": "lenovo.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Lenovo@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },

    {
        "_id": "1005",
        "pName": "iphone 8 plus",
        "pDescription": "a high end phone by apple",
        "pRating": 4.9,
        "pCategory": "Electronics",
        "price": 19999,
        "color": "Rose Gold",
        "image": "iphone.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Apple@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },

    {
        "_id": "1006",
        "pName": "Adidas Running Men Lite",
        "pDescription": "a pair of light weight running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2599,
        "color": "Blue",
        "image": "adidas-running.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Adidas@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },

    {
        "_id": "1007",
        "pName": "Adidas Running Women Lite",
        "pDescription": "a pair of light weight running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 2599,
        "color": "Pink",
        "image": "adidas-women.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Adidas@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1008",
        "pName": "Adidas Running Men robust",
        "pDescription": "A pair of robust running shoes by adidas",
        "pRating": 4,
        "pCategory": "Shoes",
        "price": 3599,
        "color": "Blue",
        "image": "adidas-men.jpeg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Adidas@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1009",
        "pName": "Reebok training shoes",
        "pDescription": "A pair of light weight training shoes by Reebok",
        "pRating": 3,
        "pCategory": "Shoes",
        "price": 1599,
        "color": "Grey",
        "image": "Reebok.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Reebok@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1010",
        "pName": "Nike Running Men Lite",
        "pDescription": "a pair of light weight running shoes by Nike",
        "pRating": 4.6,
        "pCategory": "Shoes",
        "price": 6599,
        "color": "Green",
        "image": "Nike.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Nike@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1011",
        "pName": "Computer Table by Zuari",
        "pDescription": "sunmica finished zuari computer table",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 8999,
        "color": "Beige",
        "image": "computer-table.jpeg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Zuari@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1012",
        "pName": "Study Table by Zuari",
        "pDescription": "sunmica finished zuari study table",
        "pRating": 4.3,
        "pCategory": "Furniture",
        "price": 6999,
        "color": "Coffee Brown",
        "image": "study-table.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Zuari@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1013",
        "pName": "Dressing Table by Zuari",
        "pDescription": "sunmica finished zuari Dressing table",
        "pRating": 4,
        "pCategory": "Furniture",
        "price": 2599,
        "color": "Beige",
        "image": "dressing-table.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Zuari@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1014",
        "pName": "Recliner sofa set by Grihshobha",
        "pDescription": "A luxurious and comfortable sofa set by Grihshobha furniture makers",
        "pRating": 4.8,
        "pCategory": "Furniture",
        "price": 125000,
        "color": "Dark grey",
        "image": "sofa.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Grihshobha@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1015",
        "pName": "Dining table by @HOME",
        "pDescription": "Teak wood dining table with glass top",
        "pRating": 4.4,
        "pCategory": "Furniture",
        "price": 18999,
        "color": "caramel",
        "image": "dining-table.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'HOME@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1016",
        "pName": "Kurta Plazzo set ethnic for women",
        "pDescription": "embroidery work kurta plazzo set for women",
        "pRating": 4.0,
        "pCategory": "Clothing",
        "price": 1499,
        "color": "Cyan",
        "image": "kurta.jpeg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Ethnic@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1017",
        "pName": "Cotton silk saree by FabIndia",
        "pDescription": "cotton silk hand woven sarees by Fabindia",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 5900,
        "color": "Red",
        "image": "Fabindia.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'FabIndia@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1018",
        "pName": "Modi coat for men ethnic",
        "pDescription": "Khadi cotton hand woven modi coat for men",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "yellow",
        "image": "modi.png",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'Ethnic@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1019",
        "pName": "US Polo T-shirt",
        "pDescription": "100 % pure cotton t shirt by US polo",
        "pRating": 4.8,
        "pCategory": "Clothing",
        "price": 3299,
        "color": "White",
        "image": "USPA.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'USPolo@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    },
    {
        "_id": "1020",
        "pName": "UCB T-shirt",
        "pDescription": "100 % pure cotton t shirt by UCB",
        "pRating": 4.2,
        "pCategory": "Clothing",
        "price": 1900,
        "color": "Black",
        "image": "UCB.jpg",
        "specification": "",
        "dateFirstAvailable": new Date("2012-09-17T00:00:00.000Z"),
        "dateLastAvailable": new Date("2017-09-17T00:00:00.000Z"),
        "pSeller": {
            "sId": 'UCB@Seller',
            "pDiscount": 0.2,
            "pQuantity": 666,
            "pShippingCharges": 150
        }
    }

]



exports.setupDb = () => {
    return collection.getUserCollection().then((myCollection) => {
        return myCollection.deleteMany().then(data => {
            return myCollection.insertMany(userData).then(data => {
                if (data) {
                    return pcollection.getproductCollection().then((myCollection) => {
                        return myCollection.deleteMany().then(data => {
                            return myCollection.insertMany(productData).then(data1 => {
                                if (data1){
                                    return transcollection.getOrderCollection().then((myCollection) => {
                                        return myCollection.deleteMany().then(data => {
                                            return myCollection.insertMany(orderData).then(data2 => {
                                                if (data2) {
                                                    return "Insertion Successfull"
                                                } else {
                                                    throw new Error("Insertion failed")
                                                }
                                            })
                                        })
                                    })
                                }
                                else {
                                    throw new Error("Insertion failed")
                                }
                            })
                        })

                    })
                }
                else {
                    throw new Error("Insertion failed")
                }
            })
        })

    })
}


