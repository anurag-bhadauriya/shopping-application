const express = require('express');
const userRouter = express.Router();
const hooplaUserService = require('../service/users');
const jwt = require('jsonwebtoken');

//User LOGIN
userRouter.post('/login', (req, res, next) => {
    let uEmail = req.body.uEmail;
    let uPass = req.body.uPass; 
    return hooplaUserService.userLogin(uEmail, uPass).then((item) => {
        const user = {
            id: Date.now(),
            userEmail: req.body.uEmail,
            password: req.body.uPass
        }
        jwt.sign({user}, 'secretkey' , (err, token)=> {
            let data = {
                token: token,
                userData: item
            }
            res.json(data);
        })
        // res.json(item);
    }).catch(err => next(err))
});

//User LOGOUT
userRouter.get('/logout', function (req, res, next) {
    var newUser = req.body;
    console.log("User LOGOUT request recieved>", newUser);
    return hooplaUserService.userLogout(newUser).then((item) => {
        // res.json(item);
        res.json({ "message": "User logged out successfully" });
    }).catch(err => next(err))
});

userRouter.post('/register', function (req, res, next) {
    console.log("hello");
    
    var newUserObj = req.body;
    console.log(newUserObj);
    
    // console.log("User LOGOUT request recieved>", newUser);
    return hooplaUserService.register(newUserObj).then((item) => {
        // res.json(item);
        res.json(item);
    }).catch(err => next(err))
});

userRouter.get('/register/search/:email', function (req, res, next) {
    console.log(req.params.email);    
    // console.log("User LOGOUT request recieved>", newUser);
    return hooplaUserService.searchEmail(req.params.email).then((item) => {
        // res.json(item);
        res.json(item);
    }).catch(err => next(err))
});

module.exports = userRouter; 