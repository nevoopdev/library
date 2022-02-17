const express = require("express")
const app = express()
const expressLayout = require("express-ejs-layouts")
const indexRoutes = require("./routes/index")
const mongoose = require("mongoose")

require('dotenv').config()

mongoose.connect(process.env.MONGOOSEURL)

const db = mongoose.connection

db.on('error',error => console.log(error))
db.once('open',error => console.log("connected to mongoose"))

app.set("view engine", "ejs")
app.set("views", __dirname+'/views')
app.set("layout","layouts/layout")
app.use(expressLayout)
app.use(express.static("public"))

app.use("/",indexRoutes)



app.listen(process.env.PORT||3000)