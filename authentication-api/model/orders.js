const mongoose = require("mongoose")

const orders = new mongoose.Schema({
  
    date: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    product_id: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
})

module.exports = mongoose.model("orders", orders)