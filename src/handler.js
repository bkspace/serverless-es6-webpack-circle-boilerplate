import { success } from './utils/response'

export const hello = async (event, context, callback) => {
  const body = await message({
    time: 1,
    copy: 'Your function executed successfully!!',
  })
  const response = success(body)
  callback(null, response)
}

const message = ({ time, ...rest }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(`${rest.copy} (with a delay)`)
    }, time * 100)
  )
