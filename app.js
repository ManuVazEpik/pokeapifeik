const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const usersController = require('./controllers/users.js')
const jwt = require('jsonwebtoken')

const authRoutes = require('./routers/auth.js').router
const teamsRoutes = require('./routers/teams.js').router

app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send('Hello World!');

});

app.use('/auth', authRoutes)
app.use('/teams', teamsRoutes)


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

exports.app = app;