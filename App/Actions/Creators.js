import Types from './Types'

/*----------------------------------------------------------------------
 STARTUP
 ----------------------------------------------------------------------*/

 const startup = () => ({ type: Types.STARTUP })

 /*----------------------------------------------------------------------
 AUTHENTICATION
 ----------------------------------------------------------------------*/

 const login = () => ({ type: Types.LOGIN })

 const logout = () => ({ type: Types.LOGOUT })

 /*----------------------------------------------------------------------
 USER
 ----------------------------------------------------------------------*/

 const setUser = (user) => ({ type: Types.SET_USER, user })

 const clearUser = () => ({ type: Types.CLEAR_USER })

/**
 Makes available all the action creators we've created.
 */
export default {
  startup,

  login,
  logout,

  setUser,
  clearUser,
}