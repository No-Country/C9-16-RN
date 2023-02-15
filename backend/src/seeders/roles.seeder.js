const Roles = require('../models/roles.models')

try {
    Roles.bulkCreate([
        {
            name: 'user'
        },
        {
            name: 'teacher'
        },
        {
            name: 'admin'
        }
    ])
    console.log('Roles created successfully')
} catch (err) {
    console.log({message: 'error in roles seeders ', err})
}