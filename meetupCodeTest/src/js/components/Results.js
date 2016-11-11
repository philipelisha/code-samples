import React from 'react';
import "../../scss/bucket.scss";
import { GroupBucket } from "./GroupBucket";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const Results = (props) => {
	const { results, error, loading } = props;
	return (
		<div className="results">
			{ results ? results.map( (g,int) => <GroupBucket  key={int} group={g} />) : null }
			{ error ? <Error error={error} /> : null }
			{ loading ? <Loading /> : null }
		</div>
	);
}
