import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import SearchSource from '../components/SearchSource';
import AddLyrics from '../components/AddLyrics';
import MarkLyrics from '../components/MarkLyrics';
import { 
	changeQuerySearchSource, 
	selectSearchSourceResult,
	changeRawLyrics,
	selectLyricsChar,
	expandRightLyricsCharSelection,
	expandLeftLyricsCharSelection,
	markLyricsCharSelection,
} from '../actions'


const CreateSync = ({ 
	searchResults, 
	changeQuerySearch, 
	selectResult,
	changeRawLyrics,
	processedlyrics,
	selectLyricsChar,
	expandRightLyricsCharSelection,
	expandLeftLyricsCharSelection,
	markLyricsCharSelection
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

	const renderMarkLyrics = () => (
		<MarkLyrics 
			processedlyrics={ processedlyrics }
			selectLyricsChar={ selectLyricsChar }
			expandRightLyricsCharSelection={ expandRightLyricsCharSelection }
			expandLeftLyricsCharSelection={ expandLeftLyricsCharSelection }
			markLyricsCharSelection={ markLyricsCharSelection }
		/> 
	)

	return (
		<div>
			<Route path="/create/search-source" render={renderSearchSource}/>
			<Route path="/create/add-lyrics" render={renderAddLyrics} />
			<Route path="/create/mark-lyrics" render={renderMarkLyrics} />
		</div>	
	)
}

const mapStateToProps = state => ({
	searchResults: state.synchronizer.search.results,
	processedlyrics: state.synchronizer.lyrics.processed
})

const mapDispatchToProps = dispatch => ({
	changeQuerySearch: e => dispatch(changeQuerySearchSource(e.target.value)),
	selectResult: result => dispatch(selectSearchSourceResult(result)),
	changeRawLyrics: e => dispatch(changeRawLyrics(e.target.value)),
	selectLyricsChar: id => dispatch(selectLyricsChar(id)),
	expandRightLyricsCharSelection: () => dispatch(expandRightLyricsCharSelection()),
	expandLeftLyricsCharSelection: () => dispatch(expandLeftLyricsCharSelection()),
	markLyricsCharSelection: () => dispatch(markLyricsCharSelection()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSync)