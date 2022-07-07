const uuid = require('uuid')
const crypto = require('../crypto')

const usersDatabase = {

}

const registerUser = (userName, password) => {

    let hashedPwd = crypto.hashPasswordSync(password)
        usersDatabase[uuid.v4()] = {
            userName: userName,
            password: hashedPwd
        }

}

const getUserIdByUserName = (userName) => {

    for (let userId in usersDatabase) {
        if (usersDatabase[userId].userName == userName) {
            return usersDatabase[userId]
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