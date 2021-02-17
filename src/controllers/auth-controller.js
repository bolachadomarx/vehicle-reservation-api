const express = require('express')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router()

function generateToken(params = {}) {
  return jwt.sign(params, process.env.jwt, { expiresIn: 86400 })
}

router.post('/signup', async (req, res) => {
  try {
    const { email } = req.body

    const user = await UserModel.findOne({ email })

    if (user) {
      return res.status(400).send({ error: 'Usuário já existente' })
    }

    const createdUser = await UserModel.create(req.body)
    return res.send({ createdUser, token: generateToken({ id: createdUser.id }) })
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Erro ao criar usuário' })
  }

})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await UserModel.findOne({ email })
    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      return res.status(403).send({ error: 'Você não tem permissão para acessar, verifique sua senha' })
    }
    user.password = undefined
    res.send({ user, token: generateToken({ id: user.id }) })

  } catch (error) {
    return res.status(500).send({ error: 'Não foi possível fazer o login' })
  }
})

module.exports = app => app.use('/auth', router) 