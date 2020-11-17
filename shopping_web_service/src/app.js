const express = require('express');
const app = express();
const fs = require('fs');
const https = require('https');
const requestLogger = require('./utilities/requestLogger');
const errorLogger = require('./utilities/errorLogger');
const userRouter = require('./routes/userRouting');
const cartRouter=require('./routes/cartRouting');
const productRouting = require('./routes/productRouting')
const createDb = require('./model/dbsetup');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

app.use(requestLogger);
app.use('/user', userRouter);
app.use('/cart', cartRouter);
app.use('/product', productRouting);
app.use(errorLogger);


app.get('/setupDb', (req, res, next) => {
    createDb.setupDb().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
});

//To Run server over Https
const privateKey  = fs.readFileSync('../ssl-certificate/server.key', 'utf8');
const certificate = fs.readFileSync('../ssl-certificate/server.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);
httpsServer.listen(3000, () => {
    console.log('Hoopls service running on port 3000 over https!!');
});