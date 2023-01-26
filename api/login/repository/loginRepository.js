const Driver = require('../../../database/schema/Driver')
const Passenger = require('../../../database/schema/Passenger')

class LoginRepository{
    constructor (){
        this.Driver = Driver
        this.Passenger = Passenger
    }

    async getDriver(data){
        console.log("LoginRepository getDriver [" + new Date().toISOString() + "] " + JSON.stringify(data))
        return await this.Driver.findOne(data).exec()
    }

    async getPassenger(data){
        console.log("LoginRepository getPassenger [" + new Date().toISOString() + "] " + JSON.stringify(data))
        return await this.Passenger.findOne(data).exec()
    }
}

module.exports = LoginRepository