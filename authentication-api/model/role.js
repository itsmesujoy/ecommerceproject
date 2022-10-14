const mongoose = require("mongoose")

const role = new mongoose.Schema({
  
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model("role", role)