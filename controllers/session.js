const _ = require('lodash')
const User = require('../models/User')
const { comparePassword } = require('../utils/password')

module.exports = {
  login: async (ctx) => {
    const { username, password } = ctx.request.body

    const user = await User
      .findOne({ username })
      .exec()

    if (user == null) {
      ctx.throw(400, 'No such a user')
    }
    if (!await comparePassword(password, user.password)) {
      ctx.throw(400, 'Wrong password')
    }

    ctx.session.user = _.pick(user, ['username', 'realname', 'mail'])
    ctx.body = ctx.session.user
  },

  logout: async (ctx) => {
    delete ctx.session.user
    ctx.body = {}
  },
}
