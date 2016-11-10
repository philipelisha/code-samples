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
		type: RESET_RESULTS
	}
};

function receiveGroups(json) {
	return {
		type: RECEIVE_GROUPS,
		results: Array.from(json)
	}
}

function resultsError(json) {
	return {
		type: ERROR,
		error: json.errors.reduce( ( msg, err ) => msg += err.message, "")
}

function fetchGroups(query,zip) {
	return dispatch => {
		const apiKey = "77c722a1546943357c1d22263fb1e";
		const zipQuery = zip ? `&zip=${zip}` : "";
		const queryText = query ? `&text=${query}` : "";
		const requestUrl = `https://api.meetup.com/find/groups?key=${apiKey}&photo-host=public${zipQuery}&page=10${queryText}&sign=true`;

		dispatch(resetResults());
		return fetch(requestUrl)
			.catch(json => dispatch(resultsError(json)))
			.then(json => dispatch(receiveGroups(json)))
	}
}

function shouldFetch(state) {
	const results = state.resultsList;
	return results.loading;
}

export function search(query, zip) {
	return (dispatch, getState) => {
		if ( shouldFetch(getState()) ) {
			return dispatch(fetchGroups(query, zip))
		}
	}
};
