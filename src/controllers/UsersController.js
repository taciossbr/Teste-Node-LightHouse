const bcrypt = require("bcrypt")

class UsersController {
  #connection
  constructor(connection) {
    this.#connection = connection
  }

  create = async (request, response) => {
    const {username, first_name, last_name, email, phone, password, password_confirmation} = request.body

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

    const userAlreadyInDatabase = await this.#getUserWithCredentialsConflict({
      username, email
    })
    
    if (userAlreadyInDatabase) {
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
    const { username, email } = request.body
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
    const userAlreadyInDatabase = await this.#getUserWithCredentialsConflict({
      username, email
    })
    if (userAlreadyInDatabase && userAlreadyInDatabase.id !== user.id){
      return response.status(403).json({
        error: 'There is already an user with this username or e-mail.'
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

  list = async (request, response) => {
    const { page: pageStr, page_size: requestedPageSize } = request.query
    const page = parseInt(pageStr) || 1
    const pageSize = Math.min(parseInt(requestedPageSize) || 30, 60)

    const offset = (page - 1) * pageSize

    const users = await this.#connection('users')
      .limit(pageSize)
      .offset(offset)

    const countUsers = await this.#connection('users').count('id as CNT').first()

    return response.json({
      page,
      page_size: users.length,
      count: countUsers.CNT,
      records: users
    })
  }

  #validatePasswordSecurity = (password) => {
    
    const regexValidate = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return regexValidate.test(password)
  }

  async #getUserWithCredentialsConflict({username, email}) {
    const query = this.#connection('users')
    if (username) {
      query.where({username})
    }
    if (email) {
      query.orWhere({email})
    }
    return await query.first()
  }

}

module.exports = UsersController