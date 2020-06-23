import {createStore, applyMiddleware, combineReducers} from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

const state = {
  counter: 0,
  user: {
    username: 'Jack',
    age: 20,
    married: true
  }
}

// counterReducer
function counterReducer(counter = state.counter, action) {
  switch (action.type) {
    case 'increase':
      return counter + action.payload
    case 'decrease':
      return counter - action.payload
    default:
      return counter
  }
}


export default createStore(
    combineReducers({
      counter: counterReducer
    }),
    applyMiddleware(ReduxThunk, logger)
)

