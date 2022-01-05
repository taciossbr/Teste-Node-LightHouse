const { Joi, celebrate, Segments } = require("celebrate");

module.exports = {
  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
      user: Joi.alternatives().try(
        Joi.string().email(),
        Joi.string()
      ).required(),
      password: Joi.string().required()
    })
  })
}