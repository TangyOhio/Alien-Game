import { combineReducers } from 'redux'
import move from './moveObjects'
import start from './startGame'

const rootReducer = combineReducers({
  move,
  start
})

export default rootReducer
