const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    mobileNumber: {
        type:String,
        required:true,
    },

    burgerDetals:{
        type:Array,
        required:true
    },
    quantity: {
        type:Number,
        required:true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;