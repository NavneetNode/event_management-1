const dbConfig = require("./configs/db.config")
const mongoose = require("mongoose")
const authController = require("./controllers/auth.controller")
const express = require('express')
const User = require("./models/user.model")
const app = express()
const bcrypt = require('bcryptjs')
const constants = require("./utils/constants")


mongoose.connect(dbConfig.DB_URL)
app.use(express.json())

const db = mongoose.connection
db.on("error", () => console.log("Can't connect to DB"))
db.once("open", () => {
    console.log("Connected to Mongo DB")
})

let authRouter = require('./routes/auth.routes')
authRouter(app)



app.listen(4545, () => console.log("Listening at localhost:4545"))