import { combineReducers } from 'redux'
import synchronizer from './synchronizer'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
	synchronizer,
	router: routerReducer
})