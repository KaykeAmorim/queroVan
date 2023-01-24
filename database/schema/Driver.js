const {mongoose} = require('../connection')

const DriverSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Driver = new mongoose.model('Driver', DriverSchema)
module.exports = Driver