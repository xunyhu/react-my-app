import { combineReducers } from 'redux'
import { menudataInfo } from '../actions'

function menuInfos (state = {
  menudata: [],
  crumbs: [],
  userInfo: "",
  functions: [],
  leftmenudata: {},
  collapsed: false,
  username: "",
  usermobile: ""
}, action) {
  switch (action.type) {
    case menudataInfo:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  menuInfos
})

export default rootReducer
