const LoginService = require('./service/loginService')

class LoginController{
    constructor(){
        this.LoginService = new LoginService();
    }

    loadLoginPage(req, res, next){
        res.render('login')
    }   
    
    async login(req, res, next){
        try{
            const result = await this.LoginService.login(req)
            if(!result){
                res.status(404)
                res.json({"erro": "Usuário ou Senha incorretos"})
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

module.exports = {
    LoginController
}