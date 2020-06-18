const hooplaUsersDb = require('../model/users');

const hooplaUserService = {}

hooplaUserService.userLogin = (uEmail, uPass) => {
    console.log("service", uEmail, uPass);
    return hooplaUsersDb.userLogin(uEmail, uPass).then(loginData => {
        if (loginData) return loginData;
        else{
            let err = new Error("Invalid Login Credentials!!");
            err.status = 403;
            throw err;
        }
    })
}

hooplaUserService.userLogout = () => {
    return db.userLogout().then(logoutData => {
        console.log(logoutData);
    })
}


hooplaUserService.register = (newUserObj) => {
    // console.log("service", uEmail, uPass);
    console.log(newUserObj);
    
    return hooplaUsersDb.register(newUserObj).then(Data => {
        console.log(Data);
        if (Data) return {"message":"User is successfully registered"};
        else{
            let err = new Error("Registeration Failed!");
            err.status = 403;
            throw err;
        }
    })
}

hooplaUserService.searchEmail = (email) => {
    console.log(email);    
    return hooplaUsersDb.searchEmail(email).then(Data => {
        console.log(Data);
        if (Data) return {"message":"This EmailId is not available"};
        else{
            let err = new Error("Email already registered");
            err.status = 403;
            throw err;
        }
    })
}
// const db = require('../model/users');
// const userService = {};
// errorObject = new Error();
// userService.loginUser = (userName, pass) => {
//     return db.userLogin(userName, pass).then((item) => {
//         return item;
//     })
// }

// hooplaUserService.logoutUser = function () {
//     return db.userLogout().then(function (item) {
//         if (item.insertedCount == 1) {
//             console.info('The promise was fulfilled!', item);
//             return item.ops[0];
//         }
//         else {
//             let err = new Error("The data is not available");
//             err.status = 403;
//             throw err;
//         }

//     })
// }

module.exports = hooplaUserService;