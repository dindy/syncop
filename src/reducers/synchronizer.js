const initialState = {
  search: {
    query: null,
    results: null,
    selected: null,
    errors: null
  }
}
const synchro = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_SOURCE':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default synchro