const {mongoose} = require('../connection')

const PassengerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const Passenger = new mongoose.model('Passenger', PassengerSchema)
module.exports = Passenger