const initialState = {
	loading: null,
	movies: [],
	error: null,
}

export const movieListReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_MOVIES_REQUEST': {
			return {
				loading: true,
			}
		}
		// Results being the 20 movies
		case 'GET_MOVIES_SUCCESS': {
			return {
				loading: false,
				movies: action.payload.results,
			}
		}
		case 'GET_MOVIES_FAIL': {
			return {
				loading: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}
