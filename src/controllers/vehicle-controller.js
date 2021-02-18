const express = require('express')
const VehicleModel = require('../models/vehicle')
const authMiddleware = require('../middlewares/auth-middleware')

const router = express.Router()

router.use(authMiddleware)

router.post('/', async (req, res) => {
  const vehicle = await VehicleModel.create(req.body)
  return res.send(vehicle)

})

router.get('/', async (req, res) => {
  const vehicles = await VehicleModel.find(req.query)
  return res.send(vehicles)
})

router.put('/:id', async (req, res) => {
  await VehicleModel.updateOne({ _id: req.params.id }, req.body).exec()
  const vehicle = await VehicleModel.findOne({ _id: req.params.id })
  return res.send(vehicle)
})

router.delete('/:id', async (req, res) => {
  await VehicleModel.deleteOne({ _id: req.params.id })
  return res.send('Deleted')
})

module.exports = app => app.use('/vehicle', router) 
