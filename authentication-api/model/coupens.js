const mongoose = require("mongoose")

const coupens = new mongoose.Schema({
  
    min_amount: {
        type: Number,
        required: true
    },
    max_amount: {
        type: Number,
        required: true
    },
     value: {
        type: String,
        required: true
    },
    max_discount: {
        type: Number,
        required: true
    }
    
})

module.exports = mongoose.model("coupens", coupens)