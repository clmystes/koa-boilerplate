module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.body = {
      error: err.message,
    }
    console.error(`${err.status} -- ${err.message}\n${err.stack}`)
  }
}
