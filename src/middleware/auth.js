const jsonwebtoken = require("jsonwebtoken")

function loginRequired(secret) {
  async function loginRequiredMidd(request, response, next) {
    const [method, data] = request.headers.authorization?.split(' ') || []
    if (method === 'Bearer') {
      try {
        const decoded = jsonwebtoken.verify(data, secret)
        request.loggedUserId = decoded.id
        next()
      } catch (err) {
        return response.status(401).json({
          error: 'Could not authenticate you'
        })
      }
    } else {
      return response.status(401).json({
        error: 'Could not authenticate you'
      })
    }
  }
  return loginRequiredMidd
}

module.exports = loginRequired