import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { App } from '../reducers';

const loggerMiddleware = createLogger();

export const configureStore = (state) => {
	return createStore(
		App,
		{},
		applyMiddleware(
			thunkMiddleware, 
			loggerMiddleware
		)
	);
}

// Log the initial state
// console.log(store.getState())
