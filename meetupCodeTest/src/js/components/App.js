import React from 'react';
import "../../scss/app.scss";
import { HeaderContainer } from "../containers/HeaderContainer";
import { ResultsContainer } from "../containers/ResultsContainer";

export const App = () => {
	return (
		<div className="main">
			<div className="container">
				<HeaderContainer />
				<ResultsContainer />
			</div>
		</div>
	);
}
