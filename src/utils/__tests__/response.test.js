import { success, failure } from '../response'

describe('response', () => {
  const expectedHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

  describe('success', () => {
    it('adds statusCode 500', () => {
      const response = success({ foo: 'bar' })
      expect(response.statusCode).toEqual(200)
      expect(response.headers).toEqual(expectedHeaders)
      expect(response.body).toContain('bar')
    })
  })

  describe('failure', () => {
    const response = failure({ bar: 'baz' })
    expect(response.statusCode).toEqual(500)
    expect(response.headers).toEqual(expectedHeaders)
    expect(response.body).toContain('baz')
  })
})
