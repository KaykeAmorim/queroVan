const LoginRepository = require('../../login/repository/loginRepository')
const {user_type} = require('../../../constants')
const {toPascalCase} = require('../../util/util')
const {Authorization} = require('../../security/authotization')
const RegistrationRepository = require('../repository/registrationRepository')

class RegistrationService{
    constructor(){
        this.LoginRepository = new LoginRepository()
        this.Authorization = new Authorization()
        this.RegistrationRepository = new RegistrationRepository()
    }

    async singup(data){
        console.log("RegistrationService singup [" + new Date().toISOString() + "] " + JSON.stringify(data.body))
        const {email, type, password, name} = data.body
        const callback = 'get'+ toPascalCase(type)
        
        const query = {
            email
        }

        if(user_type.passenger == type || user_type.driver == type){
            const result = await this.LoginRepository[callback](query)
            return !result ?  this.saveNewUser(type, {email, password, name}): undefined
        }
        else {
            throw TypeError('Tipo de usuário inválido')
        }
    }

    async saveNewUser(type, data){
        let callback = `saveUser${toPascalCase(type)}`
        await this.RegistrationRepository[callback](data)
        callback = `get${toPascalCase(type)}`
        const result = this.LoginRepository[callback](data)
        return this.Authorization.generateAccessToken(result)
    }
}

module.exports={RegistrationService}