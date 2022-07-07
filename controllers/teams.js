const teamsDatabase = {}

const bootstrapTeam = (userId) => {
    teamsDatabase[userId] = []
}

const getTeamOfUser = (userId) => {

    return teamsDatabase[userId]

}

const addPokemon = (userId, pokemon) => {
    teamsDatabase[userId].push(pokemon)
}

const setTeam = (userId, team) => {
    teamsDatabase[userId] = team
}

exports.bootstrapTeam = bootstrapTeam
exports.setTeam = setTeam
exports.addPokemon = addPokemon
exports.getTeamOfUser = getTeamOfUser