const express = require('express');
let db = require('./db');

//let auth = require('./routes/auth');
let users = require('./routes/users');
let bussiness = require('./routes/bussiness');
let products = require('./routes/products');

const app = express();
const port = 3000;

db.test();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('public'));

app.use('/users',users);
app.use('/bussiness', bussiness);
app.use('/products', products);

app.use((req, res, next) => res.send("Error 404"));

app.use((err, req, res, next)=> res.send("Error 500 "+err));

app.listen(port, () => console.log('Server listening...'));