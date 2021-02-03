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

// Remove this reducer?
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
				totalPages: action.payload.total_pages,
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

// Movie cast members
// No clue why I have to return state here in order for it to work and not in other reducers???
export const movieCastReducer = (state = { cast: [] }, action) => {
	switch (action.type) {
		case 'GET_MOVIE_CAST_REQUEST': {
			return {
				...state,
				loading: true,
			}
		}
		case 'GET_MOVIE_CAST_SUCCESS': {
			return {
				loading: false,
				cast: action.payload,
			}
		}
		case 'GET_MOVIE_CAST_FAIL': {
			return {
				loading: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}
