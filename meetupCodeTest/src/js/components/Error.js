import React from 'react';

export const Error = (props) => {
	const { error } = props;
	return (
		<p className="error">
			{error.msg}
		</p>
	);
}
