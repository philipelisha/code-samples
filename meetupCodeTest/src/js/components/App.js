import React from 'react';
import "../../scss/app.scss";
import { Applications } from "./Applications";
import { Quotes } from "./Quotes";

export const App = () => {
	return (
		<div className="main">
			<div className="container">
				<Applications />
				<Quotes />
			</div>
		</div>
	);
}
