import { connect } from 'react-redux';
import { search } from '../actions';
import { GroupSearchForm } from '../components/GroupSearchForm';

const mapStateToProps = (state) => {
	return {}
}

const mapDispatchToProps = (dispatch) => {
	return {
		search: (query, zip) => {
			dispatch(search(query, zip))
		}
	}
}

export const HeaderContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GroupSearchForm)