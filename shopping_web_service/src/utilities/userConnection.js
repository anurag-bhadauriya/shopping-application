const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true)
const url = "mongodb://localhost:27017/Hoopla_DB";


const UserSchema = Schema({
    uCredentials: {
        type: {
            uEmail: { type: String, unique: true },
            uPassword: String
        }, unique: true
    }, uProfile: {
        uName: String,
        uDOB: Date,
        uPhone: Number,
        uIsSeller: Boolean,
        uDateJoined: Date,
        uLastLogin: Date
    }, uCart: [],
    uAddress: [{
        line1: String,
        line2: String,
        line3: String
    }]
}, { collection: "Hoopla_Users", timestamps: true })


let userCollection = {};

userCollection.getUserCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Hoopla_Users', UserSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = userCollection;
