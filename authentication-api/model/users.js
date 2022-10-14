const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        required: true,
        default: 2
    }
    
   
})
user.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password)
}
module.exports = mongoose.model("user", user)