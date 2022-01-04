
const knex = require('knex')
const knexSettings = require('../../knexfile')

let connection = null
if (process.env.NODE_ENV === "test") {
  connection = knex(knexSettings.test)
} else {
  connection = knex(knexSettings.development)
}

module.exports = connection