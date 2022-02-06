import request from 'supertest'
import { app } from '~/server-setup.js'

const server = app.listen()

describe('User routes', () => {
  it('should return not found with wrong password', async () => {
    //preparacao
    const email = 'henrique@dev.com'
    const password = 'teste'
    //execucao
    const result = await request(server).get('/login').auth(email, password)
    //expectativa

    expect(result.status).toBe(404)
  })
  it('should return not found with wrong email', async () => {
    //preparacao
    const email = 'errado@dev.com'
    const password = '123456'
    //execucao
    const result = await request(server).get('/login').auth(email, password)
    //expectativa

    expect(result.status).toBe(404)
  })
})
