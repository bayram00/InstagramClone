const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const PostSchma = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    likes: [{ type: ObjectId, ref: "User" }],
    comments: [{
        text: String,
        postedBy: {
            type: Object,
            required:true
        }
    }],
    postedBy: {
        type: ObjectId,
        ref: "User"
    },
    Userİnfo: {
        type: Object,
        required: true
    },
}, { timestamps: true })


module.exports = mongoose.model('Post', PostSchma)