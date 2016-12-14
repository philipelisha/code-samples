import fetch from 'fetch-jsonp';

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
	return {
		type: 'RECEIVE_GROUPS',
		results: json
	}
};

const resultsError = ( json ) => {
	return {
		type: 'ERROR',
		error: json.message
	}
};

/*async*/ function fetchGroups( query, zip ) {
	return dispatch => {
		const headers = new Headers();
		const myHeaders = {
			method: 'GET', 
			headers: headers
		};

		const apiKey = "77c722a1546943357c1d22263fb1e";
		const zipQuery = zip ? `&zip=${zip}` : "";
		const queryText = query ? `&text=${query}` : "";
		const requestUrl = `https://api.meetup.com/find/groups?key=${apiKey}&photo-host=public${zipQuery}&page=20${queryText}&sign=true`;

		dispatch(resetResults());
		return fetch(requestUrl, myHeaders)
			.then(response => response.json())
			.then(json => dispatch(receiveGroups(json.data)))
			.catch(json => dispatch(resultsError(json)))
		/*try {
			const results = await fetch(requestUrl, myHeaders);
			dispatch(receiveGroups(results))
		} catch(error) {
			console.error(error);
			dispatch(resultsError(error))
		}*/
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
