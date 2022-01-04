const { default: knex } = require("knex")
const request = require('supertest')
const bcrypt = require('bcrypt')

const knexSettings = require('../../knexfile');
const createApp = require('../app');
const jsonwebtoken = require("jsonwebtoken");

let app, connection;

const password = '1234abcD'
const passwordHash = bcrypt.hashSync(password, 10)

const jwtSecret = 'secret'

describe('AuthController', () => {

  beforeEach(async () => {
    connection = knex(knexSettings.test)
    await connection.migrate.latest()
    app = createApp({dbConnection: connection, jwtSecret})
    await connection('users').insert({
      username: "tacioss6",
      first_name: "Tacio",
      last_name: "S. S.",
      email: "tacim6@exemplo.com",
      phone: "1163786458",
      password_hash: passwordHash
    })
  })
  afterEach(async () => {
    await connection.destroy()
  })
  afterAll(async () => {
    await connection.destroy()
  })

  it('should return a token when correct login with email', async () => {
    const response = await request(app)
      .post('/login/')
      .send({
        user: 'tacim6@exemplo.com',
        password: '1234abcD'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject({
      id: 1,
      token: expect.any(String),
    })
    const decoded = jsonwebtoken.decode(response.body.token)
    expect(decoded.exp - decoded.iat === 180)
  })
  it('should return a token when correct login with password', async () => {
    const response = await request(app)
      .post('/login/')
      .send({
        user: 'tacioss6',
        password: '1234abcD'
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject({
      id: 1,
      token: expect.any(String),
    })
    const decoded = jsonwebtoken.decode(response.body.token)
    expect(decoded.exp - decoded.iat === 180)
  })
  it('should not return an error when wrong password', async () => {
    const response = await request(app)
      .post('/login/')
      .send({
        user: 'tacioss6',
        password: '1234abc'
      })

    expect(response.statusCode).toBe(401)
    expect(response.body).toMatchObject({
      error: 'Invalid username or password.'
    })
  })
  it('should not return an error when wrong udename/email', async () => {
    const response = await request(app)
      .post('/login/')
      .send({
        user: 'tacioss6s',
        password: '1234abcD'
      })

    expect(response.statusCode).toBe(401)
    expect(response.body).toMatchObject({
      error: 'Invalid username or password.'
    })
  })
})
