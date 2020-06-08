import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

const middleware = [
  thunkMiddleware,
  createLogger(),
]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware),
)

export default store
