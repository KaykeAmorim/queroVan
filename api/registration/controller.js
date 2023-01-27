const {RegistrationService} = require('./service/registrationService') 

class RegistrationController{
    constructor() {
        this.RegistrationService = new RegistrationService()
    }

    loadRegistrationPage(req, res, next){
        res.render('registration')
    }

    async singup(req, res, next){
        try{
            const result = await this.RegistrationService.singup(req)
            if(!result){
                res.status(404)
                res.json({"erro": "Usuário já existente"})
            }
            else{
                res.status(200)
                res.json({'token': result})
            }
            
        }
        catch (err){
            res.status(400)
            res.json({"erro": "Requisição Inválida"})
        }
    }
}

module.exports={RegistrationController}