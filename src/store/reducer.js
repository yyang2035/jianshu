import { combineReducers } from 'redux-immutable' //可以把一些小的reducer合并成大的reducer
import {reducer as headerReducer} from '../common/header/store'

export default combineReducers({
  header:headerReducer
})