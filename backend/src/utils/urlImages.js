const { api } = require('../../config')

const parseURL = (path) => {
    return path.includes('public') ? `${api.host}${path.split('public').join('').replace(/\\/g, '/')}` : path
}

module.exports = {
    parseURL
}