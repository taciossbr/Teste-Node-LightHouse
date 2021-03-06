const { default: knex } = require('knex');
const request = require('supertest');
const bcrypt = require('bcrypt')

const knexSettings = require('../../knexfile');
const createApp = require('../app');
const jsonwebtoken = require('jsonwebtoken');

let app, connection;

const password = '1234abcD'
const passwordHash = bcrypt.hashSync(password, 10)

const secret = 'secret'

describe('UsersControlller', () => {

  beforeEach(async () => {
    connection = knex(knexSettings.test)
    await connection.migrate.latest()
    app = createApp({dbConnection: connection, jwtSecret: secret})
    await connection('users').insert({
      username: "lucas",
      first_name: "Lucas",
      last_name: "Almeida",
      email: "lucas@exemplo.com",
      phone: "1163786458",
      password_hash: passwordHash
    })
    await connection('users').insert({
      username: "tacio",
      first_name: "Tacio",
      last_name: "Santos",
      email: "tacio@exemplo.com",
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
  it('should create an user when everything its fine', async () => {
    const response = await request(app)
      .post('/users/')
      .send({
        username: "tacioss6",
        first_name: "Tacio",
        last_name: "S. S.",
        email: "tacim6@exemplo.com",
        password: "1234abcD",
        phone: "11963786458",
        password_confirmation: "1234abcD"
      })

    expect(response.statusCode).toBe(201)
    expect(response.body).toMatchObject(
      {
        username: "tacioss6",
        first_name: "Tacio",
        last_name: "S. S.",
        email: "tacim6@exemplo.com",
        phone: "11963786458",
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
        phone: "11963786458",
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
          phone: "11963786458",
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
          phone: "11963786458",
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
  it('should update user', async () => {
    const response = await request(app)
      .put('/users/1')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 1}, secret))
      .send({
        last_name: "Henrique de Almeida"
      })

    expect(response.statusCode).toBe(200)
    expect(response.body).toMatchObject(
      {
        username: "lucas",
        first_name: "Lucas",
        last_name: "Henrique de Almeida",
        email: "lucas@exemplo.com",
        phone: "1163786458",
        id: 1
      }
    )
  })
  it('should deny update user from other user', async () => {
    const response = await request(app)
      .put('/users/1')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      .send({
        last_name: "Henrique de Almeida"
      })

    expect(response.statusCode).toBe(403)
    expect(response.body).toMatchObject(
      {
        error: 'You can only update your user.'
      }
    )
  })
  it('should return 404 when user did not exists', async () => {
    const response = await request(app)
      .put('/users/3')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 3}, secret))
      .send({
        last_name: "Henrique de Almeida"
      })

    expect(response.statusCode).toBe(404)
    expect(response.body).toMatchObject(
      {
        error: 'User with id #3 not found.'
      }
    )
  })
  it('should deny update with username conflict', async () => {
    const response = await request(app)
      .put('/users/2')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      .send({
        username: 'lucas'
      })

    expect(response.statusCode).toBe(403)
    expect(response.body).toMatchObject(
      {
        error: 'There is already an user with this username or e-mail.'
      }
    )
  })
  it('should deny update with username conflict', async () => {
    const response = await request(app)
      .put('/users/2')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      .send({
        email: 'lucas@exemplo.com'
      })

    expect(response.statusCode).toBe(403)
    expect(response.body).toMatchObject(
      {
        error: 'There is already an user with this username or e-mail.'
      }
    )
  })
  it('should allow override username and password', async () => {
    const response = await request(app)
      .put('/users/2')
      .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      .send({
        email: 'tacio@exemplo.com'
      })

    expect(response.statusCode).toBe(200)
  })

  describe('UserController List Pagination', () => {
    const users = [...Array(100).keys()].map(id => id + 1).map(id => ({
      username: `user${id}`,
      first_name: `User #${id}`,
      last_name: "Random",
      email: `user${id}@exemplo.com`,
      phone: "1163786458",
      password_hash: passwordHash
    }))
    beforeEach(async () => {
      connection = knex(knexSettings.test)
      await connection.migrate.latest()
      app = createApp({dbConnection: connection, jwtSecret: secret})
      await connection('users').insert(users)
    })
    afterEach(async () => {
      await connection.destroy()
    })
    afterAll(async () => {
      await connection.destroy()
    })
    it('should return the first 30 users in database', async () => {
      const response = await request(app)
        .get('/users/')
        .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      
      expect(response.statusCode).toBe(200)
      expect(response.body.page).toBe(1)
      expect(response.body.page_size).toBe(30)
      expect(response.body.count).toBe(100)
      expect(response.body.records?.length).toBe(30)
    })
    it('should return the last page of users in database', async () => {
      const response = await request(app)
        .get('/users/?page=4')
        .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      
      expect(response.statusCode).toBe(200)
      expect(response.body.page).toBe(4)
      expect(response.body.page_size).toBe(10)
      expect(response.body.count).toBe(100)
      expect(response.body.records?.length).toBe(10)
    })
    it('should accept an custom page size', async () => {
      const response = await request(app)
        .get('/users/?page_size=60')
        .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      
      expect(response.statusCode).toBe(200)
      expect(response.body.page).toBe(1)
      expect(response.body.page_size).toBe(60)
      expect(response.body.count).toBe(100)
      expect(response.body.records?.length).toBe(60)
    })
    it('should accept an custom page size at least 60', async () => {
      const response = await request(app)
        .get('/users/?page_size=61')
        .set('Authorization', 'Bearer ' + jsonwebtoken.sign({id: 2}, secret))
      
      expect(response.statusCode).toBe(200)
      expect(response.body.page).toBe(1)
      expect(response.body.page_size).toBe(60)
      expect(response.body.count).toBe(100)
      expect(response.body.records?.length).toBe(60)
    })
  })
})