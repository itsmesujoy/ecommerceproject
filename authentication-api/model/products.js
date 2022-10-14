const mongoose = require("mongoose")

const products = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    strikeprice: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
    ,
    file: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("products", products)