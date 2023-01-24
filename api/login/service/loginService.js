const {user_type} = require('../../../constants')
const {toPascalCase} = require('../../util/util')
const {Authorization} = require('../../security/authotization')
const LoginRepository = require('../repository/loginRepository')

class LoginService {
    constructor(){
        this.LoginRepository = new LoginRepository()
        this.Authorization = new Authorization()
    }

    async login(data){
        const {password, email, type} = data.body
        const callback = 'get'+ toPascalCase(type)
        
        const query = {
            email,
            password
        }
        console.log("LoginService Login [" + new Date().toISOString() + "] " + JSON.stringify(data.body))
        if(user_type.passenger == type || user_type.driver == type){
            const result = await this.LoginRepository[callback](query)
            return result ? this.Authorization.generateAccessToken({
                "_id": result['_id'], 
                "email": result['email'], 
                "name": result['name']
            }) : undefined
        }
        else {
            throw TypeError('Tipo de usuário inválido')
        }
    }
}

module.exports = LoginService