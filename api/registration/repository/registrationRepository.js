const Driver = require('../../../database/schema/Driver')
const Passenger = require('../../../database/schema/Passenger')

class RegistrationRepository{
    constructor(){
        this.Driver = Driver
        this.Passenger = Passenger
    }

    async saveUserDriver(query){
        await this.Driver.create(query)
    }

    async saveUserPassenger(query){
        await this.Passenger.create(query)
    }
}

module.exports=RegistrationRepository