const app = require('../index')
const request = require('supertest');
const bcrypt = require('bcrypt')
const hashEmail = bcrypt.hashSync('email_jest@mail.com', 10)

describe("Auth Controller", () => {
  test("It should create a new user and return 200", async done => {
    request(app)
      .post("/auth/signup")
      .send({
        name: 'Teste do Jest',
        email: hashEmail,
        password: 'minhasenha1'
      })
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.body.createdUser.name).toBe('Teste do Jest')
        expect(response.body.createdUser.email).toBe(hashEmail)
        expect(response.body.createdUser._id).toBeTruthy()
        expect(response.body.token).toBeTruthy()
        done();
      })
  })
  test("It should return 400 if user already exists", async done => {
    request(app)
      .post("/auth/signup")
      .send({
        name: 'Teste do Jest',
        email: hashEmail,
        password: 'minhasenha1'
      })
      .then(async response => {
        expect(response.statusCode).toBe(400)
        expect(response.body).toEqual({ error: 'Usuário já existente' })
        done();
      })
  })
  test("It should login an user and return 200", async done => {
    request(app)
      .post("/auth/login")
      .send({
        email: hashEmail,
        password: 'minhasenha1'
      })
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        done();
      })
  })
  test("It should return 401 if password is wrong", async done => {
    request(app)
      .post("/auth/login")
      .send({
        email: hashEmail,
        password: 'minhasenha2'
      })
      .then(async response => {
        expect(response.statusCode).toBe(403)
        expect(response.body).toBeTruthy()
        done();
      })
  })
})
