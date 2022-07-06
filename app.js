const express = require('express');
const app = express();
const port = 3000;
const passport = require('passport')
require('./auth')(passport)

app.get('/', (req, res) => {

    res.send('Hello World!');

});

app.post('/login', (req,res) => {

    res.status(200).json({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'
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