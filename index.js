const express = require('express');
const mongoose = require('mongoose');
const Cart = require('./Model/cartSchema');

const app = express();

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/shopingCart')
.then(() => console.log("database connection successfull"));

app.get('/', (req, res) => {
    res.send('<h1>You are navigating the Home Page</h1>');
});

app.get('/show-cart', async (req, res) => {
    const data = await Cart.find();
    res.send(data);
});

app.get('/find-item/:id', async (req, res) => {
    const item = await Cart.find({_id: req.params.id});
    res.send(item);
});

app.post('/add-item',async (req, res) => {
    const itemData = new Cart(req.body);
    await itemData.save();
    res.send(itemData);
});

app.listen(8080, () => console.log('app is listing on post http://localhost:8080'));