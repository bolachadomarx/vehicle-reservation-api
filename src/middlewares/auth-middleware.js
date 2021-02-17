const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).send({ error: 'Token não fornecido' })
  }

  const parts = authHeader.split(' ')
  const [schema, token] = parts
  jwt.verify(token, process.env.jwt, (err, decoded) => {
    if (err) {
      return res.sstatus(401).send({ error: 'Token inválido' })
    }
    req.userId = decoded.id
    return next()
  })

}