const mongoose = require('mongoose')
const config = require('../config')

mongoose.connect(config.databaseUrl, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected success.')
})

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connected fail.')
  console.error(err)
  process.exit(-1)
})

mongoose.connection.on('disconnected', () => {
  console.error('MongoDB connected disconnected.')
})
