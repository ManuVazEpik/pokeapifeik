const teamsDatabase = {}

const bootstrapTeam = (userId) => {
    teamsDatabase[userId] = [{name: 'Bulbasaur'}, {name: 'Ralts'}]
}

const getTeamOfUser = (userId) => {

    return teamsDatabase[userId]

}

const addPokemon = (userId, pokemonName) => {
    teamsDatabase[userId].push({name: pokemonName})
}

const setTeam = (userId, team) => {
    teamsDatabase[userId] = team
}

exports.bootstrapTeam = bootstrapTeam
exports.setTeam = setTeam
exports.addPokemon = addPokemon
exports.getTeamOfUser = getTeamOfUser