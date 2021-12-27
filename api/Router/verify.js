const jwt = require('jsonwebtoken')
const User = require('../models/User')



module.exports = function async(req, res, next) {


    const token = req.cookies.User_;

    if (token) {
        jwt.verify(token, process.env.jwtKey, (err, payload) => {
            if (err) {
                console.log(err)
                return res.status(401).json({ error: 'you must ve logged In' })
            } else {
                const { _id } = payload;
                User.findById(_id).then(userData => {
                    req.user = userData;
                    next()
                })
            }
        })
    } else {
        res.status(401).json('you must be logged In')
    }



}