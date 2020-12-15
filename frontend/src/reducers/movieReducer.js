export const movieListReducer = (state = { movies: [] }, action) => {
	switch (action.type) {
		case 'GET_MOVIES_REQUEST': {
			return {
				loading: true,
			}
		}
		case 'GET_MOVIES_SUCCESS': {
			return {
				loading: false,
				movies: action.payload,
			}
		}

		default:
			return state
	}
}
