const router = require('express').Router()
const multer = require('multer')
//Schma
const UserSchma = require('../models/User');
const PostSchma = require('../models/Post');

//
const verify = require('./verify')


//Storage Path
const Storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Uploads/img')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }

})

const Upload = multer({
    storage: Storage,
    limits: {
        fieldSize: 1024 * 1024 * 3
    },

});



router.post('/createposts', verify, Upload.single('photos'), async (req, res) => {
    try {
        if (!req.file) {
            return res.json('not photo')
        } else {

            const post = new PostSchma({
                title: req.body.title,
                body: req.body.body,
                photo: req.file.filename,
                postedBy: req.user._id
            })

            await post.save().then((response) => res.json(response))
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = router