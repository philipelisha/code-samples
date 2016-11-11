import React, {Component} from 'react';
import "../../scss/form.scss";

export class GroupSearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: "",
			zip: ""
		}

		this.submit = this.submit.bind(this);
	}

	submit(e) {
		e.preventDefault();

		const { search } = this.props;
		search(this.state.query, this.state.zip)
	}

	render() {
		
		return (
			<div className="group-search-form">
				<div className="group-search-form-inner">
					<h2>Find a Meetup</h2>
					<form onSubmit={this.submit}>
						<input 
							className="query-input"
							type="text"
							placeholder="Search term"
							value={this.state.query} 
							onChange={(e) => this.setState({query: e.target.value})} />
						<input
							className="zip-input"
							type="text" 
							placeholder="Zip"
							value={this.state.zip} 
							onChange={(e) => this.setState({zip: e.target.value})} />
						<button className="hidden" type="submit" />
					</form>
				</div>
			</div>
		);
	}
}
