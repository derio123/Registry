import { combineReducers } from 'redux'
import { reducer as reduxFromReducer } from 'redux-form'

export default combineReducers({
    form: reduxFromReducer
})