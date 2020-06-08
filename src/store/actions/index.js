import { GET_SERVERTIME } from '../actionTypes'

const getServerTime = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(+new Date())
    }, 1000);
  })
}

const addServerTime = time => ({
  type: GET_SERVERTIME,
  serverTime: time,
})

export const fetchServerTime = () => dispatch => (
  getServerTime()
    .then(data => dispatch(addServerTime(data)))
    .catch(err => console.error(err))  
)


