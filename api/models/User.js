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
    profilePicture: {
        type: String,
        default: ""
    },
    followers: [{ type: ObjectId, ref: "User" }],
    followings: [{ type: ObjectId, ref: "User" }],
    desc: {
        type: String,
        max: 50
    },
    saved: {
        type: Array,
        default: []
    }
    ,
    Post: [{
        type: Object,
        ref: "Post"
    }]

}, { timestamps: true });


module.exports = mongoose.model('User', SignupSchma)