const uuid = require('uuid')
const crypto = require('./crypto.js')

const usersDatabase = {

    '0001': {
        'password': '',
        'salt': '',
        'userName': ''
    }

}

const registerUser = (userId, password) =>{

    crypto.hashPassword(password, (err, result) =>{

        usersDatabase[uuid.v4()] = {
            userName: userName,
            password: result
        }

    })

    

}

const checkUserCredentials = (userId, password, done) =>{
    let user = usersDatabase[userId]
    crypto.comparePassword(password, user.password, (err, isMatch, done))
}

