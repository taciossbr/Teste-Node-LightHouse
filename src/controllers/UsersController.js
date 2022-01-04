const bcrypt = require("bcrypt")

class UsersController {
  #connection
  constructor(connection) {
    this.#connection = connection
  }

  create = async (request, response) => {
    const {username, first_name, last_name, email, phone, password, password_confirmation} = request.body

    // TODO validate username
    // TODO validate email

    if (password !== password_confirmation) {
      return response.status(400).json({
        error: 'Password confirmation don\'t match'
      })
    }

    if (!(this.#validatePasswordSecurity(password))) {
      return response.status(400).json({
        error: 'Invalid password field. Password need to have at least: '
              + 'a digit, a upper case letter, and a lower case letter'
      })
    }

    const userAlreadyinDatabase = await this.#connection('users')
      .where({username})
      .orWhere({email})
      .first()
    
    if (userAlreadyinDatabase) {
      return response.status(403).json({
        error: 'There is already an user with this username or e-mail.'
      })
    }

    const password_hash = bcrypt.hashSync(password, 10);

    const id = await this.#connection('users').insert({
      username, first_name, last_name, email, phone, password_hash
    }).returning('id')

    const userCreated = await this.#connection('users')
      .select([ 'users.username', 'users.first_name', 'users.last_name',
                'users.email', 'users.phone', 'users.id'])
      .where({id})
      .first()

    return response.status(201).json(userCreated)

  }

  update = async (request, response) => {
    const { id } = request.params
    const idInToken = request.loggedUserId

    if (idInToken !== parseInt(id)) {
      return response.status(403).send({
        error: 'You can only update your user.'
      })
    }

    const user = await this.#connection('users')
        .select(['users.id', 'users.first_name', 'users.last_name', 'users.username', 'users.email', 'users.phone'])
        .where({ id }).first()

    if (!user) {
        return response.status(404).json({
            'error': `User with id #${id} not found.`
        })
    }

    await this.#connection('users')
        .where({ id })
        .update(request.body)
    
    const userUpdated = await this.#connection('users')
        .select(['users.id', 'users.first_name', 'users.last_name', 'users.username', 'users.email', 'users.phone'])
        .where({ id }).first()

    return response.json(userUpdated)
  }

  #validatePasswordSecurity = (password) => {
    
    const regexValidate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regexValidate.test(password)
  }

}

module.exports = UsersController