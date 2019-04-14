import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({ //让state变成一个immutable对象了
  focused:false
})
export default (state = defaultState, action)=>{
  if (action.type===constants.SERCH_FOCUS){
//immutable对象的set方法，会结合之前immutable对象的值
//和设置的值，返回一个全新的对象，即并不会修改原先的数据。
    return state.set('focused',true) //因为state已经是一个immutable对象了，所以可以用.set方法进行设置。
  }
  if (action.type===constants.SERCH_BLUR){
    return state.set('focused',false)
  }
  return state
}
