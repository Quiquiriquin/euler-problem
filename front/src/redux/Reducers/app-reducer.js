const appReducer = (state = { result: null, results: null, ansSelected: null, isLoading : false }, action) => {
	let newState = Object.assign({}, state)
	switch (action.type) {
		case "UPDATE_RESULTS":
			newState.results = action.data.results
			return newState
		case "UPDATE_ANS_SELECTED":
			newState.ansSelected = action.data.ansSelected
			return newState
		case "UPDATE_RESULT":
			newState.result = action.data.result
			return newState
		case "UPDATE_LOADER":
			newState.isLoading = action.data.isLoading
			return newState
		default:
			return newState
	}
}

export default appReducer