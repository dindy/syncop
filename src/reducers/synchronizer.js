import processRawText from './processRawText'

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
  },
  lyrics: {
    raw: null,
    processed: null
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
    case 'CHANGE_RAW_LYRICS':
      return {
        ...state, lyrics: {
          raw: action.payload,
          processed: processRawText(state.lyrics.raw)
        }
      }    
    case 'SAVE_RAW_LYRICS':
      return {
        ...state, lyrics: {
          processed: processRawText(state.lyrics.raw)
        }
      }         
    default:
      return state
  }
}

export default synchro