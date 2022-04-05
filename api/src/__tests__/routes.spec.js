import bcrypt from 'bcrypt'
import request from 'supertest'
import jwt from 'jsonwebtoken'
import { prisma } from '~/data'
import { app } from '~/server-setup.js'

const server = app.listen()

describe('User routes', () => {
  beforeAll(async () => {
    await prisma.user.deleteMany({})
  })
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
  it.only('should return logged in user by correct credentials', async () => {
    //preparacao
    const email = 'henrique@dev.com'
    const password = '123456'
    const saltRounds = 10

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    })
    //execucao
    const result = await request(server).get('/login').auth(email, password)
    const decodedToken = jwt.verify(result.body.token, process.env.JWT_SECRET)
    //expectativa
    expect(result.status).toBe(200)
    expect(result.body).toBeTruthy()
    expect(result.body.token).toBeTruthy()
    expect(result.body.user.id).toBe(user.id)
    expect(result.body.user.email).toBe(email)
    // expect(result.body.user.password).toBeFalsy()
    expect(decodedToken.sub).toBe(user.id)
  })
})
