const router = require('express').Router();
const UserSchma = require('../models/User')
const PostSchma = require('../models/Post.js')
const verify = require('./verify')

router.get('/loggedUser', verify, async (req, res) => {
    await res.json(req.user)
})


router.get('/User/:profile', verify, async (req, res) => {
    await UserSchma.findOne({ userName: { $in: req.params.profile } }).then(User => {
        try {
            PostSchma.find({ postedBy: { $in: User._id } }).then(Post => {
                return res.json({Post, User})
            })
        } catch (error) {
            console.log(error)
        }
    })
})









module.exports = router