const express = require('express')
const router = express.Router()
const passport = require('passport')
require('../auth')(passport)
const teamsController = require('../controllers/teams.js')
const { getUser } = require('../controllers/users.js')

router.route('/')
.get(passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let user = getUser(req.user.userId)
    res.status(200).json({
        trainer: user.userName,
        team: teamsController.getTeamOfUser(req.body.userId)});

})
.put((req, res) => {

    teamsController.setTeam(req.body.user, req.body.team)

})

router.route('/pokemons')
.post(() => {

    

})

router.route('/pokemons/:pokeid')
.delete(() => {
    
})


exports.router = router