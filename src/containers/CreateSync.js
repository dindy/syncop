import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SearchSource from '../components/SearchSource';
import AddLyrics from '../components/AddLyrics';
import { 
	changeQuerySearchSource, 
	selectSearchSourceResult,
	changeRawLyrics
} from '../actions'


const CreateSync = ({ 
	searchResults, 
	changeQuerySearch, 
	selectResult,
	changeRawLyrics
}) => {

	const renderSearchSource = () => (
		<SearchSource 
			searchResults={ searchResults } 
			selectResult={ selectResult } 
			changeQuerySearch={ changeQuerySearch }
		/>  
	)

	const renderAddLyrics = () => (
		<AddLyrics 
			changeRawLyrics={ changeRawLyrics }
		/> 
	)

	return (
		<div>
			<Route path="/create/search" render={renderSearchSource}/>
			<Route path="/create/lyrics" render={renderAddLyrics} />
		</div>	
	)
}

const mapStateToProps = state => ({
	searchResults: state.synchronizer.search.results
})

const mapDispatchToProps = dispatch => ({
	changeQuerySearch: e => dispatch(changeQuerySearchSource(e.target.value)),
	selectResult: result => dispatch(selectSearchSourceResult(result)),
	changeRawLyrics: e => dispatch(changeRawLyrics(e.target.value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSync)