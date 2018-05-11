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
    processed: []
  }
}

const generateRandomId = (length) => '_' + Math.random().toString(36).substr(2, length)

const extractSelectedCharsObj = (processed) => processed.filter(char => char.isSelected)
  
const expandRight = (processed) => {
  const selected = extractSelectedCharsObj(processed)
  const last = selected[selected.length - 1]
  const lastIndex = processed.indexOf(last)
  return processed.map((charObj, index) => index == lastIndex + 1 ?
    { ...charObj, isSelected: true } : { ...charObj }
  )
}

const expandLeft = (processed) => {
  const selected = extractSelectedCharsObj(processed)
  const first = selected[0]
  const firstIndex = processed.indexOf(first)
  return processed.map((charObj, index) => index == firstIndex - 1 ?
    { ...charObj, isSelected: true } : { ...charObj }
  )
}

const markSelection = (processed) => {
  const markId = generateRandomId(5)
  return processed.map(char => char.isSelected ? 
    { ...char, isSelected: false, mark: markId } : { ...char }
  )
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
        }
      }    
    case 'SAVE_RAW_LYRICS':
      return {
        ...state, lyrics: {
          processed: processRawText(state.lyrics.raw)
        }
      }         
    case 'SELECT_LYRICS_CHAR':
      return {
        ...state, lyrics: {
          processed: state.lyrics.processed.map(charObj => charObj.id == action.payload ?
            { ...charObj, isSelected: true } : { ...charObj, isSelected: false }
          )
        }
      }         
    case 'EXPAND_RIGHT_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          processed: expandRight(state.lyrics.processed)
        }
      }  
    case 'EXPAND_LEFT_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          processed: expandLeft(state.lyrics.processed)
        }
      }  
    case 'MARK_LYRICS_CHAR_SELECTION':
      return {
        ...state, lyrics: {
          processed: markSelection(state.lyrics.processed)
        }
      }                            
    default:
      return state
  }
}

export default synchro