import React from 'react';
import { NextEvent } from "./NextEvent";

export const GroupBucket = ({group}) => {
	const { name, key_photo, city, state, members, description, link, next_event } = group;
	const { photo_link } = key_photo || {};
	return (
		<div className="group-bucket">
			<a href={link} target="_blank">
				<div className="img-mask">
					<img src={photo_link} />
				</div>
				<h3 className="group-title">{name}</h3>
				<h5 className="location">Location:<br /><small>{`${city}, ${state}`}</small></h5>
				<h5 className="members">Members:<br /><small>{members}</small></h5>
				<div className="hover-elements">
					<div className="description" dangerouslySetInnerHTML={{__html: description}} />
					{next_event ? <NextEvent event={next_event} /> : null}
				</div>
			</a>
		</div>
	);
}
