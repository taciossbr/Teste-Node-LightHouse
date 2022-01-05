const { celebrate, Joi, Segments } = require('celebrate')


module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string().required(),
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().length(11).pattern(/^[0-9]+$/).required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required(),
    })
  }),
  update: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().integer().required()
    }),
    [Segments.BODY]: Joi.object().keys({
      username: Joi.string(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.string().length(11).pattern(/^[0-9]+$/),
    }).required().min(1)
  }),
  list: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number().integer(),
      page_size: Joi.number().integer()
    })
  })
}