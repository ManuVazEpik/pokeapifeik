const express = require('express')
const router = express.Router()
const axios = require('axios').default
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
.put(passport.authenticate('jwt', {session: false}), (req, res, next) => {

    teamsController.setTeam(req.body.userId, req.body.team)
    res.status(200).send()

})

router.route('/pokemons')
.post(passport.authenticate('jwt', {session: false}), (req, res, next) => {

    let pokemonName = req.body.name

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
    .then(response => {

        let pokemon = {
            name: pokemonName,
            pokedexNumber: response.data.id
        }
        teamsController.addPokemon(req.user.userId, pokemon)


            res.status(201).json(pokemon)
    })
    .catch(error => {

        res.status(400).send({message: error})
        console.log(error)

    })

})

router.route('/pokemons/:pokeid')
.delete(() => {
    
})


exports.router = router