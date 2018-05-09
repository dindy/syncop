import { push } from 'react-router-redux'

export const searchSource = () => {
  return (dispatch) => {
    dispatch(push('/search'))  
  }
}

export const changeQuerySearchSource = (query) => {

	const apiKey = "AIzaSyBTf35qbuZgiC9JUgJ_e8cTMcMxErTyReA"

	return (dispatch) => {
		return fetch(`https://www.googleapis.com/youtube/v3/search?
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
}

export const selectSearchSourceResult = (result) => {
	return (dispatch) => {
		dispatch({ type: 'SELECT_SEARCH_SOURCE_RESULT', payload: result })
	    dispatch(push('/lyrics'))  
	}
}