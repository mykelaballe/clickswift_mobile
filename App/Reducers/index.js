import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import UserReducer from './UserReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
    auth: AuthReducer,
    user: UserReducer,
})

// Put reducer keys that you do NOT want stored to persistence here
export const persistentStoreBlacklist = []

// OR put reducer keys that you DO want stored to persistence here (overrides blacklist)
export const persistentStoreWhitelist = ['auth','user']
