import { hello } from '../handler'

describe('hello', () => {
  const expectedHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }

  it('returns expected response', async () => {
    const event = 'event'
    const context = 'context'
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200)
      expect(response.headers).toEqual(expectedHeaders)
      expect(response.body).toContain(
        'Your function executed successfully!! (with a delay)'
      )
    }

    await hello(event, context, callback)
  })
})
