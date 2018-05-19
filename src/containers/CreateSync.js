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
	updateLastClickPosition
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
	markLyricsCharSelection,
	updateLastClickPosition,
	rawLyrics,
	optimizedLyrics
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
			rawLyrics={ rawLyrics }
		/> 
	)

	const renderMarkLyrics = () => (
		<MarkLyrics 
			processedlyrics={ processedlyrics }
			selectLyricsChar={ selectLyricsChar }
			expandRightLyricsCharSelection={ expandRightLyricsCharSelection }
			expandLeftLyricsCharSelection={ expandLeftLyricsCharSelection }
			markLyricsCharSelection={ markLyricsCharSelection }
			updateLastClickPosition={ updateLastClickPosition }
			optimizedLyrics={ optimizedLyrics }
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
	processedlyrics: state.synchronizer.lyrics.processed,
	rawLyrics: state.synchronizer.lyrics.raw,
	optimizedLyrics: state.synchronizer.lyrics.optimized
})

const mapDispatchToProps = dispatch => ({
	changeQuerySearch: e => dispatch(changeQuerySearchSource(e.target.value)),
	selectResult: result => dispatch(selectSearchSourceResult(result)),
	changeRawLyrics: e => dispatch(changeRawLyrics(e.target.value)),
	selectLyricsChar: id => dispatch(selectLyricsChar(id)),
	expandRightLyricsCharSelection: () => dispatch(expandRightLyricsCharSelection()),
	expandLeftLyricsCharSelection: () => dispatch(expandLeftLyricsCharSelection()),
	markLyricsCharSelection: () => dispatch(markLyricsCharSelection()),
	updateLastClickPosition: (coords) => dispatch(updateLastClickPosition(coords)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSync)