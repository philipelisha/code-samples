import React, {Component} from 'react';

export class GroupSearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	render() {
		const { search } = this.props;
		return (
			<div className="group-search-form">
				<button onClick={() => search("","")}>RUN SEARCH</button>
			</div>
		);
	}
}
