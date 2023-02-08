const bycrypt = require('bycrypt')

const hashPassword = (plainPassword) => {
    return bycrypt.hashSync(plainPassword, 9)
}

const comparePassword = (plainPassword, hashedPassword) => {
    return bycrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}