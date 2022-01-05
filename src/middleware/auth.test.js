const jsonwebtoken = require("jsonwebtoken");
const loginRequired = require("./auth");

const secret = 'secret'

describe('loginRequired', () => {
  let mockRequest
  let mockResponse
  let nextFunction = jest.fn()
  let midd

  beforeAll(() => {
    jest.useFakeTimers();
  })

  beforeEach(() => {
    mockRequest = {
      headers: {},
      body: {}
    }
    mockResponse = {
      json: jest.fn(data => {
        mockResponse.body = data
        return mockResponse
      })
    }
    mockResponse.status = jest.fn((code) => {
      mockResponse.statusCode = code
      return mockResponse
    })
    midd = loginRequired(secret)
    nextFunction = jest.fn()
  });

  it('should allow requests when using a valid jwt', async () => {

    mockRequest.headers = {
      'authorization': 'Bearer ' + jsonwebtoken.sign({}, secret)
    }

    midd(mockRequest, mockResponse, nextFunction)

    expect(nextFunction).toBeCalledTimes(1)
  })
  it('should deny requests when using a invalid jwt (wrong secret)', async () => {

      mockRequest.headers = {
        'authorization': 'Bearer ' + jsonwebtoken.sign({id: 1}, 'wrong')
      }
      const response = await midd(mockRequest, mockResponse, nextFunction)
  
      expect(response.body).toMatchObject({
        error: 'Could not authenticate you'
      })

      expect(nextFunction).not.toHaveBeenCalled()

  })
  it('should deny requests when expired jwt', async () => {

    mockRequest.headers = {
      'authorization': 'Bearer ' + jsonwebtoken.sign({}, secret, { expiresIn: '3m'})
    }

    jest.advanceTimersByTime(200000)

    const response = await midd(mockRequest, mockResponse, nextFunction)
    expect(response.statusCode).toBe(401)
    expect(response.body).toMatchObject({
      error: 'Could not authenticate you'
    })

    expect(nextFunction).not.toHaveBeenCalled()


  })
  it('should deny requests when using no bearer token', async () => {

    mockRequest.headers = {
      'authorization': 'Basic dGVzdGVAMTIzNA=='
    }

    const response = await midd(mockRequest, mockResponse, nextFunction)

    expect(response.body).toMatchObject({
      error: 'Could not authenticate you'
    })

    expect(nextFunction).not.toHaveBeenCalled()

  })
  it('should deny requests when using no auth', async () => {

    mockRequest.headers = {}

    const response = await midd(mockRequest, mockResponse, nextFunction)

    expect(response.body).toMatchObject({
      error: 'Could not authenticate you'
    })

    expect(nextFunction).not.toHaveBeenCalled()

  })
  it('should add logged user to request', async () => {

    mockRequest.headers = {
      'authorization': 'Bearer ' + jsonwebtoken.sign({id: 1}, secret)
    }

    await midd(mockRequest, mockResponse, nextFunction)

    expect(mockRequest.loggedUserId).toBe(1)
  })
})