// Popular movies
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

// Recommended Movies
export const getRecommendedMovies = (state = { movies: [] }, action) => {
	switch (action.type) {
		case 'GET_RECOMMENDED_MOVIES_REQUEST': {
			return {
				loading: true,
			}
		}
		case 'GET_RECOMMENDED_MOVIES_SUCCESS': {
			return {
				loading: false,
				movies: action.payload.results,
			}
		}
		case 'GET_RECOMMENDED_MOVIES_FAIL': {
			return {
				loading: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}
