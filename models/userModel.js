const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require, unique: true },
    password: { type: String, require },
    isAdmin: { type: Boolean, default: false },
}, {
    timestamps: true,
})

module.exports = mongoose.model('users', userSchema)