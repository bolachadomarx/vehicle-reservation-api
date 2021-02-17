const mongoose = require('mongoose')
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

})

UserSchema.pre('save', (next) => {
  this.password = bcrypt.hash(this.password, 12)
  next()
})

const User = mongoose.model('User', UserSchema)
module.exports = User