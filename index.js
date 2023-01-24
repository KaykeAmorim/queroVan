const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')
const loginRouter = require('./api/login/route')
const app = express()


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/', loginRouter)

app.use('/images', express.static('images'))
app.use('/css', express.static('css'))



app.listen(config.port, ()=> {
    console.log("Server online")
})