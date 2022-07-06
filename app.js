const express = require('express');
const app = express();
const port = 3000;
const passport = require('passport')
const usersController = require('./controllers/users.js')
const jwt = require('jsonwebtoken')
require('./auth')(passport)

app.get('/', (req, res) => {

    res.send('Hello World!');

});

app.post('/login', (req,res) => {

    //Comprobamos crendenciales
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        if(!result){
            return res.status(401).json({message: 'Usuario o contraseña incorrectos'})
        }
        //Si las credenciales son correctas, generamos un token
        const token = jwt.sign({userId: req.body.user})

    })

    res.status(200).json({
        token: token
    })

})

app.post('/team/pokemon', () => {

    res.status(200).send('Helo World!');

})

//Usamos un middleware para autenticar las peticiones
app.get('/team', passport.authenticate('jwt', {session: false}), (req, res, next) => {

    res.status(200).send('Helo World!');

})

app.delete('/team/pokemon/:pokeid', () => {

    res.status(200).send('Helo World!');

})

app.put('/team', () => {

    res.status(200).send('Helo World!');

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

exports.app = app;