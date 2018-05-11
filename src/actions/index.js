import { push } from 'react-router-redux'

export const searchSource = () => (dispatch) => dispatch(push('/create/search-source'))  

export const changeQuerySearchSource = (query) => {

	const apiKey = "AIzaSyBTf35qbuZgiC9JUgJ_e8cTMcMxErTyReA"

	return (dispatch) => fetch(`https://www.googleapis.com/youtube/v3/search?
			q=${query}
			&maxResults=25
			&part=snippet
			&key=${apiKey}`
		).then(
			response => response.json().then(json => response.ok ?  
				dispatch({ type: 'SOURCE_SEARCH_FETCH_DONE', payload: json }) :
				dispatch({ type: 'SOURCE_SEARCH_FETCH_ERROR', payload: json.error })
			), 
			error => dispatch({ type: 'SOURCE_SEARCH_FETCH_ERROR', payload: error })
		)
}

export const selectSearchSourceResult = (result) => (dispatch) => {
	dispatch({ type: 'SELECT_SEARCH_SOURCE_RESULT', payload: result })
    dispatch(push('/create/add-lyrics'))  
}

export const saveRawLyrics = () => (dispatch) => {
	dispatch({ type: 'SAVE_RAW_LYRICS', payload: null })
	dispatch(push('/create/mark-lyrics'))
}

export const changeRawLyrics = (lyrics) => (dispatch) => dispatch({ 
	type: 'CHANGE_RAW_LYRICS', 
	payload: lyrics 
})

export const selectLyricsChar = (charId) => (dispatch) => dispatch({
	type: 'SELECT_LYRICS_CHAR', 
	payload: charId
})

export const expandRightLyricsCharSelection = () => (dispatch) => dispatch({
	type: 'EXPAND_RIGHT_LYRICS_CHAR_SELECTION', 
	payload: null
})

export const expandLeftLyricsCharSelection = () => (dispatch) => dispatch({
	type: 'EXPAND_LEFT_LYRICS_CHAR_SELECTION', 
	payload: null
})

export const markLyricsCharSelection = () => (dispatch) => dispatch({
	type: 'MARK_LYRICS_CHAR_SELECTION', 
	payload: null
})
