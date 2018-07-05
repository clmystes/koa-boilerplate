const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const session = require('koa-session')
const koaLogger = require('koa-logger')
const dotenv = require('dotenv')

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 * you should `cp .env.example .env` and modify it
 */
dotenv.load({ path: '.env' })

/**
 * do not use process.env to improve performance
 */
const config = require('./config')
const errHandler = require('./middlewares/errorHandler')
const router = require('./router')

/**
 * setup
 */
require('./db')

const app = new Koa()

app.keys = [config.secretKey]

app.use(koaLogger())

app.use(session({
  maxAge: 7 * 24 * 60 * 60 * 60 * 1000, // default seven days
}, app))

app.use(bodyparser())

app.use(errHandler)

app
  .use(router.routes())
  .use(router.allowedMethods())

if (!module.parent) {
  app.listen(config.port, async () => {
    console.log(`Server is running at http://localhost:${config.port}`)
  })
}

module.exports = app
