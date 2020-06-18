const express = require('express');
const app = express();
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger');
const userRouter = require('./routes/userRouting');
const cartRouter=require('./routes/cartRouting');
const productRouting = require('./routes/productRouting')
const createDb = require("./model/dbsetup");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/product', productRouting)
app.use(errorLogger);


app.get('/setupDb', (req, res, next) => {
    console.log("hello");
    createDb.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

app.listen(3000);
console.log("Hoopla Server Started!!");