import * as constants from './constants'
const defaultState = {
  focused:false
}
export default (state = defaultState, action)=>{
  if (action.type===constants.SERCH_FOCUS){
    return {focused:true}
  }
  if (action.type===constants.SERCH_BLUR){
    return {focused:false}
  }
  return state
}
