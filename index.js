const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')
const app = express()


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(config.port, ()=> {
    console.log("Server online")
})