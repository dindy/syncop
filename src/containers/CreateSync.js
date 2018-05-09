import React from 'react'
import { connect } from 'react-redux'
import SearchSource from '../components/SearchSource';
import { 
	changeQuerySearchSource, 
	selectSearchSourceResult 
} from '../actions'

const CreateSync = ({ 
	searchResults, 
	changeQuerySearch, 
	selectResult 
}) => (
	<SearchSource 
		searchResults={ searchResults } 
		selectResult={ selectResult } 
		changeQuerySearch={ changeQuerySearch }
	/> 
)

const mapStateToProps = state => ({
	searchResults: state.synchronizer.search.results
})

const mapDispatchToProps = dispatch => ({
	changeQuerySearch: e => dispatch(changeQuerySearchSource(e.target.value)),
	selectResult: result => dispatch(selectSearchSourceResult(result))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSync)