const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async()=>{
    await request(app).post('/users').send({
        name:'Soubhik',
        email:'soubhik@ganguly.com',
        password:'qwerty12345'
    }).expect(201)
})