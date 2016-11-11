import { polyfill } from "es6-promise";
polyfill();
import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const RESET_RESULTS = 'RESET_RESULTS';
export const ERROR = 'ERROR';

/*
 * action creators
 */


export const resetResults = () => {
	return {
		type: 'RESET_RESULTS'
	}
};

export const receiveGroups = ( json ) => {
	debugger;
	return {
		type: 'RECEIVE_GROUPS',
		results: Array.from(json)
	}
};

const resultsError = ( json ) => {
	return {
		type: 'ERROR',
		error: json.message
	}
};

const getRequest = (url, headers) => {
	return fetch(url, headers)
}

async function fetchGroups( query, zip ) {
	return dispatch => {
		const headers = new Headers();
		const myHeaders = {
			method: 'GET', 
			headers: headers, 
			mode: 'no-cors'
		};

		const apiKey = "77c722a1546943357c1d22263fb1e";
		const zipQuery = zip ? `&zip=${zip}` : "";
		const queryText = query ? `&text=${query}` : "&text=javascript";
		const requestUrl = `https://api.meetup.com/find/groups?key=${apiKey}&photo-host=public${zipQuery}&page=10${queryText}&sign=true`;

		dispatch(resetResults());
		// return fetch(requestUrl, myHeaders)
			// .then(json => dispatch(receiveGroups(json)))
			// .catch(json => dispatch(resultsError(json)))
		try {
			const results = await getRequest(requestUrl, myHeaders);
			dispatch(receiveGroups(results))
		} catch(error) {
			console.error(error);
			dispatch(resultsError(json))
		}
	}
};

const shouldFetch = ( state ) => {
	const results = state.rootReducer;
	return !results.loading;
};

export const search = ( query, zip ) => {
	return (dispatch, getState) => {
		if ( shouldFetch(getState()) ) {
			return dispatch(fetchGroups(query, zip))
		}
	}
};
