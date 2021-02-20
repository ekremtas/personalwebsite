import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux'

const middleware = [thunk]

if (process.env.NODE_ENV == 'development') {
  middleware.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middleware))
export default store
