const Router = require('express').Router()
//SCHMA SİGNUP
const UserSchma = require('../models/User');
//Password Encrypt
const bcrypt = require('bcrypt');
//json web tokken
const Jwt = require('jsonwebtoken');
//
const verfiy = require('./verify')


Router.post('/signup', async (req, res) => {

    const Salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, Salt)

    //eposta db controller
    const FindEposta = await UserSchma.findOne({ EpostOrPhone: req.body.EpostOrPhone })
    if (FindEposta) return res.send({ E_previously: true })//önceden kayıtlı olmuşsa true

    //Username Controller
    const FindUser = await UserSchma.findOne({ userName: req.body.userName })
    if (FindUser) return res.send({ U_previously: true })//önceden kayıtlı olmuşsa true


    const SignObj = await UserSchma({
        EpostOrPhone: req.body.EpostOrPhone,
        name: req.body.name,
        userName: req.body.userName,
        password: hashPassword
    })


    try {
        await SignObj.save().then((result) => res.send({ Redirect: true }))
    } catch (error) {
        console.log(error)
    }

})

//cookie Timer----------------

//create
const MaxAge = 60 * 60 * 1 //1 Hour

//Login Register-------------------

//create
Router.post("/login", async (req, res) => {

    const { EpostOrPhone, password } = req.body

    if (!EpostOrPhone || !password) {
        return res.status(422).json({ error: "Plase enter all the required fields." })
    }

    //Eposta or number contoroller

    await UserSchma.findOne({ EpostOrPhone: EpostOrPhone })
        .then(savedUser => {

            if (!savedUser) {
                return res.json({ notMatch: 'Girdiğin kullanıcı adı bir hesaba ait değil. Lütfen kullanıcı adını kontrol et ve tekrar dene.' })
            }

            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {

                        const tokken = Jwt.sign({ _id: savedUser._id }, process.env.jwtKey)

                        const Cookie = res.cookie('User_', tokken, { maxAge: MaxAge * 1000 })

                        res.json({ tokken, User: savedUser })

                    } else {
                        return res.json({ notMatch: 'Üzgünüz, şifren yanlıştı. Lütfen şifreni dikkatlice kontrol et. ' })
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }).catch(err => {
            console.log(err)
        })


})




//LogOut Register----------------------------

//create
Router.get('/logout', async (req, res) => {
    res.cookie('User_', '', { maxAge: 1 })
    res.send({ cookie: "Invalid" })

})








module.exports = Router