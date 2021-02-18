const request = require('supertest');
const jestConfig = require('../../jest.config');
const app = require('../index')


describe("Vehicle Controller", () => {
  test("It should return 200 and body should be truthy ", done => {
    request(app)
      .get("/vehicle")
      .set('Authorization', `Bearer ${process.env.test_bearer}`)
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        done();
      })
  })
  test("It should return 401 and error on body if Authorization header not included ", done => {
    request(app)
      .get("/vehicle")
      .then(async response => {
        expect(response.statusCode).toBe(401)
        expect(response.body).toEqual({ error: 'Token não fornecido' })
        done()
      })
  })
  test("It should return 200 and create vehicle with correct values", done => {
    request(app)
      .post("/vehicle")
      .set('Authorization', `Bearer ${process.env.test_bearer}`)
      .send({
        model: 'Carro teste',
        brand: 'Teste',
        year: 2021,
        rentedBy: null,
        price: 200,
        kilometers: 200000,
        image: process.env.image_test
      })
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.body.model).toBeTruthy()
        expect(response.body.brand).toBeTruthy()
        expect(response.body.year).toBeTruthy()
        expect(response.body.price).toBeTruthy()
        expect(response.body.kilometers).toBeTruthy()
        expect(response.body.image).toBeTruthy()
        expect(response.body._id).toBeTruthy()
        this.id = response.body._id
        done()
      })
  })
  test("It should return 200 and update vehicle with correct values", done => {
    request(app)
      .put(`/vehicle/${this.id}`)
      .set('Authorization', `Bearer ${process.env.test_bearer}`)
      .send({
        model: 'Carro teste modificado',
      })
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        expect(response.body.model).toEqual('Carro teste modificado')
        done()
      })
  })
  test('It should return 200 and delete vehicle with correct id', done => {
    request(app)
      .delete(`/vehicle/${this.id}`)
      .set('Authorization', `Bearer ${process.env.test_bearer}`)
      .then(async response => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeTruthy()
        done()
      })
  })
})
