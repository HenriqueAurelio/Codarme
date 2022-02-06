export const decodeBasicToken = (basicToken) => {
  const [type, credentials] = basicToken.split(' ')
  if (type !== 'Basic') {
    throw new Error('Wrong Token Type')
  }

  const decoded = Buffer.from(credentials, 'base64').toString()
  const encoded = Buffer.from(decoded, 'utf8').toString('base64')

  if (encoded !== credentials) {
    throw new Error('Credentials are not correct encoded')
  }

  if (decoded.indexOf(':') == -1) {
    throw new Error('Wrong credentials format')
  }
  return decoded.split(':')
}
