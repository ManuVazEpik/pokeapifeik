const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../auth')(passport)

router.route('/')
.get(passport.authenticate('jwt', {session: false}), (req, res, next) => {

    res.status(200).send('Hello World!');

})
.put((req, res) => {})

router.route('/pokemons')
.post(() => {

})

router.route('/pokemons/:pokeid')
.delete(() => {
    
})


exports.router = router