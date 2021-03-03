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
				totalPages: action.payload.total_pages,
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

// Watchlist
export const movieWatchListReducer = (state = { watchlist: [] }, action) => {
	switch (action.type) {
		case 'GET_WATCHLIST_REQUEST': {
			return {
				loading: true,
			}
		}

		case 'GET_WATCHLIST_SUCCESS': {
			return {
				loading: false,
				watchlist: action.payload,
			}
		}

		case 'GET_WATCHLIST_FAIL': {
			return {
				loading: false,
				error: action.payload,
			}
		}

		// Reset watchlist to empty array on user logout, specifically empty so the Array.fill method fills the page with empty divs
		case 'RESET_WATCHLIST': {
			return { watchlist: [] }
		}

		default:
			return state
	}
}

// Watchlist add movie
export const movieAddWatchListReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_TO_WATCHLIST_REQUEST': {
			return {
				loading: true,
				success: false,
			}
		}
		case 'ADD_TO_WATCHLIST_SUCCESS': {
			return {
				loading: false,
				success: true,
				message: action.payload,
			}
		}
		case 'ADD_TO_WATCHLIST_FAIL': {
			return {
				loading: false,
				success: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}

// Watchlist delete movie
export const movieDeleteWatchListReducer = (state = {}, action) => {
	switch (action.type) {
		case 'DELETE_FROM_WATCHLIST_REQUEST': {
			return {
				loading: true,
				success: false,
			}
		}
		case 'DELETE_FROM_WATCHLIST_SUCCESS': {
			return {
				loading: false,
				success: true,
				message: action.payload,
			}
		}
		case 'DELETE_FROM_WATCHLIST_FAIL': {
			return {
				loading: false,
				success: false,
				error: action.payload,
			}
		}

		default:
			return state
	}
}
