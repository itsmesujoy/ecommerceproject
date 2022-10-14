const mongoose = require("mongoose")

const banners = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    }
    
})

module.exports = mongoose.model("banners", banners)