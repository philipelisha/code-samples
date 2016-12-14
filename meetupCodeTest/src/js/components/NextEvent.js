import React from 'react';
import Moment from "moment";

export const NextEvent = ({event}) => {
	const date = Moment(event.time).format("MM/DD/YYYY HH:mm");
	return (
		<div className="group-bucket-next-event">
			<h5>Next Event</h5>
			<div><small>{event.name}</small></div>
			<div><small>{date}</small></div>
		</div>
	);
}
