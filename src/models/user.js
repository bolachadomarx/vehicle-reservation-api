const mongoose = require('../database')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  accessToken: {
    type: String
  },
})

UserSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

const User = mongoose.model('User', UserSchema)
module.exports = User