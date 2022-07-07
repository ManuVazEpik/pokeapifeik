const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

//Controladores
const usersController = require('../controllers/users.js')
usersController.registerUser('Manubasepi', '1234')

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
        const tokenCreado = jwt.sign({userId: req.body.user}, 'secretPassword')

        res.status(200).json({
            token: tokenCreado
        })

    })

})

exports.router = router