import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data)=>{
  return {
    type:constants.CHANGE_LIST,
    data:fromJS(data)
  }
}

export const getSerchFocusAction = ()=>{
  const action = {
    type:constants.SERCH_FOCUS
  }
  return action
}

export const getSerchBlurAction = ()=>{
  const action = {
    type:constants.SERCH_BLUR
  }
  return action
}

export const getList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{
      let data = res.data.data;
      // console.log(data);
      dispatch(changeList(data))
    }).catch(()=>{
      console.log('error')
    })
  }
}