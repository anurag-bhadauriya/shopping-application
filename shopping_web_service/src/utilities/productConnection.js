const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Hoopla_DB";


const productSchema = Schema({
    _id: {type:Number},
    pName:String,
    pDescription: String,
    pRating: Number,
    pCategory: String,
    price: Number,
    color: String,
    image: String,
    specification: String,
    dateFirstAvailable: Date,
    dateLastAvailable: Date,
    pSeller:{
        sId:String,
        pDiscount:Number,
        pQuantity:Number,
        pShippingCharges:Number
    }
}, { collection: "products", timestamps: true })


let productCollection = {};

productCollection.getproductCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('products', productSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = productCollection;