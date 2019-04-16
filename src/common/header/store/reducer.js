import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({ //让state变成一个immutable对象了
  focused:false,
  list:[]    //fromJS也会包里面的list对象转为immutable数组。
})
export default (state = defaultState, action)=>{
//   if (action.type===constants.SERCH_FOCUS){
// //immutable对象的set方法，会结合之前immutable对象的值
// //和设置的值，返回一个全新的对象，即并不会修改原先的数据。
//     return state.set('focused',true) //因为state已经是一个immutable对象了，所以可以用.set方法进行设置。
//   }
//   if (action.type===constants.SERCH_BLUR){
//     return state.set('focused',false)
//   }

//   if(action.type===constants.CHANGE_LIST){
//     return state.set('list',action.data) //此时的action.data是个普通的数组，数据类型就变了，肯定会出错的。(actionCreators.js中用fromJS一下data就没事了)
//   }

//多个if语句可以用switch替代：
  switch(action.type){
    case constants.SERCH_FOCUS:
      return state.set('focused',true) 
    case constants.SERCH_BLUR:
      return state.set('focused',false)
    case constants.CHANGE_LIST:
      return state.set('list',action.data)
    default:
      return state  
  }

}
