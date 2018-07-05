const Router = require('koa-router')

const router = new Router({
  prefix: '/api',
})

const session = require('./session')

router.use(session.routes(), session.allowedMethods())

module.exports = router
