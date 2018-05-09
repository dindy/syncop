const initialState = {
  search: {
    query: null,
    results: [],
    selected: null,
    errors: null
  },
  source: {
    id: null,
    provider: 'YouTube'
  }
}
const synchro = (state = initialState, action) => {
  switch (action.type) {
    case 'SOURCE_SEARCH_FETCH_DONE':
      return {
        ...state, search: {
          results: action.payload.items.filter( item => item.id.kind === "youtube#video" ),
          errors: null,
          selected: null
        }
      }     
    case 'SELECT_SEARCH_SOURCE_RESULT':
      return {
        ...state, source: {
          id: action.payload.id.videoId
        }
      } 
    default:
      return state
  }
}

export default synchro