import Types from '../Actions/Types'
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

export const INITIAL_STATE = Immutable({
  id: null,
  username: ''
})

const setUser = (state, action) =>
  state.merge({ ...action.user })

const clearUser = (state, action) => INITIAL_STATE
  
const ACTION_HANDLERS = {
  [Types.SET_USER]: setUser,
  [Types.CLEAR_USER]: clearUser,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
