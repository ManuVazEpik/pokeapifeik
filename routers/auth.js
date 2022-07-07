const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

//Controladores
const usersController = require('../controllers/users.js')
usersController.registerUser('Aldito', '4321')

router.route('/')
.get((req, res) => {
    res.send('Hello World!')
})

router.route('/login')
.post((req, res) => {
    if(!req.body){
        return res.status(400).json({message: 'Datos no recibidos'})
    }   else if(!req.body.user || !req.body.password){
        return res.status(400).json({message: 'Datos no recibidos'})
    }

    //Comprobamos crendenciales
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        if(!result){
            return res.status(401).json({message: 'Usuario o contraseña incorrectos'})
        }
        //Si las credenciales son correctas, generamos un token
        let user = usersController.getUserIdByUserName(req.body.user)
        const tokenCreado = jwt.sign({userId: user.userId}, 'secretPassword')

        res.status(200).json({
            token: tokenCreado
        })

    })

})

exports.router = router