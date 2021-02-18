const mongoose = require('../database')

const VehicleSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  rentedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  kilometers: {
    type: Number,
    required: true
  },
  rentDate: {
    type: Date
  }
})

const Vehicle = mongoose.model('Vehicle', VehicleSchema)

module.exports = Vehicle