import { GET_SERVERTIME } from '../actionTypes'

const initialState = {
  serverTime: null,
}

const app = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVERTIME:
      return {
        ...state,
        serverTime: action.serverTime
      }
    default:
      return state
  }
}

export default app