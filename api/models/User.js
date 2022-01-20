const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const SignupSchma = new mongoose.Schema({
    EpostOrPhone: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    desc: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: "http://localhost:5000/Static/NotProfile/44884218_345707102882519_2446069589734326272_n.jpg"
    },
    followers: [{ type: ObjectId, ref: "User" }],
    followings: [{ type: ObjectId, ref: "User" }],
    saved: [{ type: ObjectId, ref: "Post" }],
   

}, { timestamps: true });


module.exports = mongoose.model('User', SignupSchma)