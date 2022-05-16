import { combineReducers } from 'redux';
import userSignIn from './userSignIn/reducer'
import userSignUp from './userSignUp/reducer'

export default combineReducers({
    userSignIn,
    userSignUp,
})