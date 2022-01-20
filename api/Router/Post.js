const router = require('express').Router()
const multer = require('multer')
//Schma
const UserSchma = require('../models/User');
const PostSchma = require('../models/Post');

//verifiy
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

router.get('/getmypost', verify, async (req, res) => {
    PostSchma.find({ postedBy: { $in: req.user._id } }, (err, Post) => {
        if (err) {
            console.log(err)
        } else {
            res.json(Post)
        }
    })
})

router.post('/createposts', verify, Upload.single('photos'), async (req, res) => {
    try {
        if (!req.file) {
            return res.json('not photo')
        } else {

            const post = new PostSchma({
                title: req.body.title,
                body: req.body.body,
                photo: req.file.filename,
                postedBy: req.user._id,
                Userİnfo: { userName: req.user.userName, ProfilePhoto: req.user.profilePicture }
            })


            await post.save()
        }
    } catch (error) {
        console.log(error)
    }
})


router.get('/getsubpost', verify, async (req, res) => {
    try {
        if (!req.user) {
            res.json('Allert')
        } else {

            await PostSchma.find({ postedBy: { $in: req.user.followings } }).then((response) => {

                if (response.length > 0) {
                    res.json({ response, user: req.user })
                } else {
                    res.json({ NotPost: "You must find your friends " })
                }
            })

        }
    } catch (error) {
        console.log(error)
    }
})


//likes response
router.put('/likes', verify, async (req, res) => {
    await PostSchma.findByIdAndUpdate(req.body.id, {
        $push: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ err: err })
        } else {
            return res.json(result)
        }
    })
})

router.put('/unlike', verify, async (req, res) => {

    await PostSchma.findByIdAndUpdate(req.body.id, {
        $pull: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ err: err })
        } else {
            return res.json(result)
        }
    })
})


//Save response
router.put('/save', verify, async (req, res) => {

    await UserSchma.findByIdAndUpdate(req.user._id, {
        $push: { saved: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.json({ err: err })
        } else {
            return res.json(req.user)
        }
    })
})
//un Save response
router.put('/unsave', verify, async (req, res) => {

    await UserSchma.findByIdAndUpdate(req.user._id, {
        $pull: { saved: req.body.id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ err: err })
        } else {
            return res.json(req.user)
        }
    })
})


router.put('/comment', verify, async (req, res) => {
    const comment = {
        text: req.body.CommentText,
        postedBy: { userName: req.user.userName, Picture: req.user.profilePicture }

    }

    PostSchma.findByIdAndUpdate(req.body.id, {
        $push: { comments: comment }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result)
        }
    })

})

router.post('/ModalPost', verify, async (req, res) => {

    PostSchma.findById(req.body.id).then((result) => {

        res.json({ result: result, User: req.user })

    })
})





module.exports = router