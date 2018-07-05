const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  realname: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Number,
    default: Date.now,
  },
  updated_at: {
    type: Number,
    default: Date.now,
  },
}, {
  collection: 'User',
})

userSchema.plugin(mongoosePaginate)

userSchema.pre('validate', (next) => {
  /**
   * do validate here
   */
  next()
})

module.exports = mongoose.model('User', userSchema)
