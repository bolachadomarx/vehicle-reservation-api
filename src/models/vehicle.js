const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    require: true
  },
  year: {
    type: String,
    require: true
  },
  brand: {
    type: String,
    require: true
  },
  rentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Vehicle = mongoose.model('Vehicle', VehicleSchema)

module.exports = Vehicle