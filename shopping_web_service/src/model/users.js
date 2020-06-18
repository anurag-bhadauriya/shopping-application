const hooplaUserCollection = require('../utilities/userConnection');

const hooplaUserDb = {}

// Login User
hooplaUserDb.userLogin = (uEmail, uPass) => {
    return hooplaUserCollection.getUserCollection().then(model => {
        return model.findOne({ "uCredentials.uEmail": uEmail, "uCredentials.uPass": uPass })
            .then(userData => {
                if (userData !== null) {
                    return model.findOneAndUpdate({ "uCredentials.uEmail": uEmail },
                        { $set: { "uProfile.uLastLogin": new Date() } }, { returnOriginal: false, upsert: false })
                        .then(data => {
                            if (data == null) return null;
                            else return data
                        })
                } else return null
            })
    })
    // client.close();
}

// Logout User
hooplaUserDb.userLogout = (newUser) => {
    return hooplaUserCollection.getUserCollection().then(model => {
        return model.find(newUser).then(data => {
            return data;
        })
    })
}

hooplaUserDb.register = (newUserObj) => {
    //console.log(newUserObj);
    return hooplaUserCollection.getUserCollection().then(model => {
        // return model.findOne({ "uCredentials.uEmail": newUserObj.uCredentials.uEmail }).then(userData => {
        //     if (userData !== null) {
        //         let err = new Error("EmailId already exists");
        //         err.status = 500;
        //         throw err;
        //         //
        //     } else {
                return model.insertMany(newUserObj).then(data => {//
                    if (data) {
                        return data;
                    }
                    else {
                        return null;
                    }
                })
        //     }
        // })
    })
}

hooplaUserDb.searchEmail = (email) => {
    //console.log(newUserObj);
    return hooplaUserCollection.getUserCollection().then(model => {
        return model.findOne({ "uCredentials.uEmail": email }).then(userData => {
            if (userData !== null) {
                return userData;
            } else {
                return null;
            }
        })
    })
}

module.exports = hooplaUserDb;
