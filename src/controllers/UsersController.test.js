const { default: knex } = require('knex');
const request = require('supertest');

const knexSettings = require('../../knexfile');
const createApp = require('../app');

let app, connection;

describe('UsersControlller', () => {

  beforeEach(async () => {
    connection = knex(knexSettings.test)
    await connection.migrate.latest()
    app = createApp({dbConnection: connection})
  })
  afterEach(async () => {
    await connection.destroy()
  })
  afterAll(async () => {
    await connection.destroy()
  })
  it('should create an user when everything its fine', async () => {
    const response = await request(app)
      .post('/users/')
      .send({
        username: "tacioss6",
        first_name: "Tacio",
        last_name: "S. S.",
        email: "tacim6@exemplo.com",
        password: "1234abcD",
        phone: "1163786458",
        password_confirmation: "1234abcD"
      })

    expect(response.statusCode).toBe(201)
    expect(response.body).toMatchObject(
      {
        username: "tacioss6",
        first_name: "Tacio",
        last_name: "S. S.",
        email: "tacim6@exemplo.com",
        phone: "1163786458",
        id: expect.any(Number)
      }
    )
  })
  it('should rejects when passwords dont match', async () => {
    const response = await request(app)
      .post('/users/')
      .send({
        username: "tacioss6",
        first_name: "Tacio",
        last_name: "S. S.",
        email: "tacim6@exemplo.com",
        password: "1234abc",
        phone: "1163786458",
        password_confirmation: "1234abcD"
      })

    expect(response.statusCode).toBe(400)
    expect(response.body).toMatchObject(
      {
        error: 'Password confirmation don\'t match'
      }
    )
  })
  it('should rejects when passwords isn\'t secure', async () => {
    const executeTests = async (password) => {
      const response = await request(app)
        .post('/users/')
        .send({
          username: "tacioss6",
          first_name: "Tacio",
          last_name: "S. S.",
          email: "tacim6@exemplo.com",
          password: password,
          phone: "1163786458",
          password_confirmation: password
        })
  
      expect(response.statusCode).toBe(400)
      expect(response.body).toMatchObject({
        error: 'Invalid password field. Password need to have at least: '
              + 'a digit, a upper case letter, and a lower case letter'
      })
    }

    await executeTests('Y7j8R4z')
    await executeTests('yhkdjhfh')
    await executeTests('SADFSDFD')
    await executeTests('15468785')
    await executeTests('fdasfSDF')
    await executeTests('fsdfs443')
    await executeTests('ASDFSD34')
  })
  it('should rejects users with same email or password', async () => {
    const makeRequest = async (email, username) => {
      const response = await request(app)
        .post('/users/')
        .send({
          username,
          email,
          first_name: "Tacio",
          last_name: "S. S.",
          password: "1234abcD",
          phone: "1163786458",
          password_confirmation: "1234abcD"
        })
      return response
    }

    const successResponse = await makeRequest('tacioss@exemplo.com', 'tacioss')
    expect(successResponse.statusCode).toBe(201)

    const emailError = await makeRequest('tacioss@exemplo.com', 'different')
    expect(emailError.statusCode).toBe(403)
    expect(emailError.body).toMatchObject({
      error: 'There is already an user with this username or e-mail.'
    })

    const usernameError = await makeRequest('different@exemplo.com', 'tacioss')
    expect(usernameError.statusCode).toBe(403)
    expect(usernameError.body).toMatchObject({
      error: 'There is already an user with this username or e-mail.'
    })

    const usernameAndEmailError = await makeRequest('tacioss@exemplo.com', 'tacioss')
    expect(usernameAndEmailError.statusCode).toBe(403)
    expect(usernameAndEmailError.body).toMatchObject({
      error: 'There is already an user with this username or e-mail.'
    })


  })
})