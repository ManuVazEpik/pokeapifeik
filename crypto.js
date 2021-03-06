const bcrypt = require('bcrypt');

const hashPassword = (plainTextPassword, done) => {
    bcrypt.hash(plainTextPassword, 10, done)
}

const hashPasswordSync = (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10)
}

const comparePassword = (plainTextPassword, hashedPassword, done) => {
    bcrypt.compare(plainTextPassword, hashedPassword, done)
}

exports.hashPassword = hashPassword
exports.hashPasswordSync = hashPasswordSync
exports.comparePassword = comparePassword