import {SERCH_FOCUS,SERCH_BLUR} from './actionTypes'
export const getSerchFocusAction = ()=>{
  const action = {
    type:SERCH_FOCUS
  }
  return action
}

export const getSerchBlurAction = ()=>{
  const action = {
    type:SERCH_BLUR
  }
  return action
}
