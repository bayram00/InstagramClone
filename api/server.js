const express = require('express');
const app = express();
const mongoose = require("mongoose")
const cookiParser = require('cookie-parser')
const cors = require('cors');
const env = require('dotenv');

//node js and React
app.use(cors({ origin: "http://localhost:3000", credentials: true }))
//client Public 
app.use(express.static('public'))
//env
env.config()
app.use(express.json({ extented: true }))

//cookieParser
app.use(cookiParser())

//connect DB
mongoose.connect(process.env._db, { useNewUrlParser: true }, () => console.log('Connect database'))


const auth = require('./Router/auth');
app.use('/accounts', auth)

const Post = require('./Router/Post');
app.use("/", Post)




app.listen(process.env.PORT, () => console.log('server in running port ' + process.env.PORT))