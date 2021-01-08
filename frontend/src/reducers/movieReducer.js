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

export const movieGenreListReducer = (state= {}, action) {
	switch (action.type) {
		case 'GET_MOVIES_BY_GENRE_REQUEST': {
			return {
				loading: true,
			}
		}
		case 'GET_MOVIES_BY_GENRE_SUCCESS': {
			return {
				loading: false,
				movies: action.payload.results,
			}
		}
		case 'GET_MOVIES_BY_GENRE_FAIL': {
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
export const movieListRecommendedReducer = (state = { movies: [] }, action) => {
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

// Movie details
export const movieDetailReducer = (state = { details: {} }, action) => {
	switch (action.type) {
		case 'GET_MOVIE_DETAILS_REQUEST': {
			return {
				loading: true,
			}
		}
		case 'GET_MOVIE_DETAILS_SUCCESS': {
			return {
				loading: false,
				details: action.payload,
			}
		}
		case 'GET_MOVIE_DETAILS_FAIL': {
			return {
				loading: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}
