//DHu1FCoRSvSUC6jC
//mongodb+srv://a2soumyaranjan:DHu1FCoRSvSUC6jC@cluster0.rvao2ls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//mongodb+srv://a2soumyaranjan:<password>@cluster0.rvao2ls.mongodb.net/
const express = require('express');
const mongooes = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./modal/Order');
const cors = require('cors');

const app = express();

app.use(cors())

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

mongooes.connect('mongodb+srv://a2soumyaranjan:DHu1FCoRSvSUC6jC@cluster0.rvao2ls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0' , {
    useNewUrlParser:true,
    useUnifiedTopology:true
});

app.post('/api/orders' , async (req, res) => {
    try{
    const {mobileNumber, burgerDetals, quantity} = req.body;
    const order = new Order({
        mobileNumber,
        burgerDetals,
        quantity
    });
        await order.save();
        res.status(201).send(order);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.get('/api/orders', async (req, res) => {
    try {
        const order = await Order.find();
        res.send(order);
    } catch (error) {
        res.status(404).send(err);
    }
});

app.listen(PORT, () => {
    console.log("listening on port " + PORT)
});

