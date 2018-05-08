import { push } from 'react-router-redux'

export const searchSource = () => {
  return (dispatch) => {
    dispatch(push('/search'))  
    dispatch({
      type: 'SEARCH_SOURCE',
      payload: null
    })
  }
}

