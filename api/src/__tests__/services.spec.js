// import { decodeBasicToken } from '~/modules/users/services'

// describe('User services', () => {
//   it('should return credentials by basic authentication token', () => {
//     //preparação
//     const email = 'henrique@dev.com'
//     const password = '123456'
//     const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')

//     const basicToken = `Basic ${token}`
//     //execução
//     const result = decodeBasicToken(basicToken)

//     //expectativa
//     expect(result).toEqual([email, password])
//   })

//   it('should throw new error when token is not basic type', () => {
//     //preparação
//     const email = 'henrique@gmail.com'
//     const password = '123456'
//     const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')

//     const basicToken = `Bearer ${token}`
//     //execução
//     const result = () => decodeBasicToken(basicToken)

//     //expectativa
//     expect(result).toThrowError('Wrong Token Type')
//   })

//   it('should throw new error when credentials are not on correct format', () => {
//     //preparação
//     const email = 'henrique@gmail.com'
//     const password = '123456'
//     const token = Buffer.from(`${email}${password}`, 'utf8').toString('base64')

//     const basicToken = `Basic ${token}`
//     //execução
//     const result = () => decodeBasicToken(basicToken)

//     //expectativa
//     expect(result).toThrowError('Wrong credentials format')
//   })
//   it('should throw new error when credentials are not base64 encoded', () => {
//     //preparação
//     const email = 'henrique@gmail.com'
//     const password = '123456'
//     const token = `${email}${password}`

//     const basicToken = `Basic ${token}`
//     //execução
//     const result = () => decodeBasicToken(basicToken)

//     //expectativa
//     expect(result).toThrowError('Credentials are not correct encoded')
//   })
// })
// // const multBy2 = (v) => v * 2

// // describe('test if multiply by 2', () => {
// //   it('test if multBy2 multiply 10 to 20 ', () => {
// //     const result = multBy2(10)
// //     expect(result).toBe(20)
// //   })

// //   it('test if multBy2 multiply 20 to 40 ', () => {
// //     const result = multBy2(20)
// //     expect(result).toBe(40)
// //   })
// // })
