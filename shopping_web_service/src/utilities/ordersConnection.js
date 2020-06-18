const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Hoopla_DB";


const orderSchema = Schema({
    userEmailId:String,
    price:Number,
    orderId:String,
    orderDate:Date,
    products:[{
        pid:String,
        qty:Number
    }]
}, { collection: "Transaction", timestamps: true })


let orderCollection = {};

orderCollection.getOrderCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Transaction', orderSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = orderCollection;