const { request, response } = require("express")
const jsonwebtoken = require("jsonwebtoken")
const bcrypt = require("bcrypt")


class AuthController {

  #connection
  #jwtSecret

  constructor(connection, jwtSecret) {
    this.#connection = connection
    this.#jwtSecret = jwtSecret
  }
  login = async (request, response) => {
    const {user: userCredential, password} = request.body

    const user = await this.#connection('users')
      .where({username: userCredential})
      .orWhere({email: userCredential})
      .first()
    
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
      return response.status(401).json({
        error: 'Invalid username or password.'
      })
    }

    const token = jsonwebtoken.sign({id: user.id}, this.#jwtSecret, {expiresIn: '3m'})


    return response.json({
      id: user.id,
      token
    })
  }
}

module.exports = AuthController