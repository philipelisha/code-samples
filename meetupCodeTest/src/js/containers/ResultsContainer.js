import { connect } from 'react-redux';
import { search } from '../actions';
import { Results } from '../components/Results';

const mapStateToProps = (state) => {
	const { results, error, loading } = state;
	return {
		results,
		error,
		loading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadMore: () => {
			dispatch(loadMore())
		}
	}
}

export const ResultsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Results)