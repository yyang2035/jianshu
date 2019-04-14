import * as constants from './constants'
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
