const uuid = require('uuid')
const crypto = require('../crypto')
const teams = require('./teams')

const usersDatabase = {}

const registerUser = (userName, password) => {

    let hashedPwd = crypto.hashPasswordSync(password)
    let userId = uuid.v4()
        usersDatabase[userId] = {
            userName: userName,
            password: hashedPwd
        }
        teams.bootstrapTeam(userId)

}

const getUser = (userId) => {
    return usersDatabase[userId]
}

const getUserIdByUserName = (userName) => {

    for (let user in usersDatabase) {
        if (usersDatabase[user].userName == userName) {
            let userData = usersDatabase[user]
            userData.userId = user
            return userData
        }
    }

}

const checkUserCredentials = (userId, password, done) =>{
    let user = getUserIdByUserName(userId)
    if(user){
        console.log(user)
        crypto.comparePassword(password, user.password, done)
    }else{
        done("Missing user")
    }
}


exports.registerUser = registerUser
exports.checkUserCredentials = checkUserCredentials
exports.getUserIdByUserName = getUserIdByUserName
exports.getUser = getUser