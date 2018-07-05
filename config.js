const { env } = process

module.exports = {
  env: env.NODE_ENV,
  port: env.PORT,
  secretKey: env.SECRET_KEY,
  databaseUrl: env.DATABASE_URL,
}
