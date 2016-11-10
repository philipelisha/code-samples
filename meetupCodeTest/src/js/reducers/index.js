import { RECEIVE_GROUPS, RESET_RESULTS, ERROR } from '../actions';
import { combineReducers } from 'redux';

const rootReducer = function(state = {
	results: null,
	error: null,
	loading: false
}, action = '') {
	switch (action.type) {
		case RECEIVE_GROUPS:
			return Object.assign({}, state, {
				results: action.results,
				loading: false
			})
		case RESET_RESULTS:
			return Object.assign({}, state, {
				results: null,
				loading: true,
				error: null
			})
		case ERROR:
			return Object.assign({}, state, {
				error: {msg: action.error},
				loading: false
			})
		default:
			return state
	}
}

export const App = combineReducers({rootReducer});
