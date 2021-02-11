import axios from 'axios'

// If page is left empty it will default to 1 in the movieController
export const getMovies = (page, trending) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIES_REQUEST',
			})

			const { data } = await axios.get(
				`/api/movies/?trending=${trending}&page=${page}`
			)

			dispatch({
				type: 'GET_MOVIES_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIES_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const getMoviesByGenre = (page = '', genreID) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIES_REQUEST',
			})

			const { data } = await axios.get(
				`/api/movies/genres/${genreID}/?page=${page}`
			)

			dispatch({
				type: 'GET_MOVIES_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIES_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const getMoviesBySearch = (query, page) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIES_REQUEST',
			})

			const { data } = await axios.get(
				`/api/movies/search/${query}/?page=${page}`
			)

			dispatch({
				type: 'GET_MOVIES_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIES_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const getMovieDetails = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIE_DETAILS_REQUEST',
			})

			const { data } = await axios.get(`/api/movies/${id}`)

			dispatch({
				type: 'GET_MOVIE_DETAILS_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIE_DETAILS_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const getMovieCast = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIE_CAST_REQUEST',
			})

			const { data } = await axios.get(`/api/movies/cast/${id}`)

			dispatch({
				type: 'GET_MOVIE_CAST_SUCCESS',
				payload: data.cast,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIE_DETAILS_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const getRecommendedMovies = (id, page) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_REQUEST',
			})

			const { data } = await axios.get(`/api/movies/${id}/recommended/${page}`)

			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const addToWatchList = () => {
	return async (dispatch, getState) => {
		try {
			dispatch({
				type: 'ADD_TO_WATCHLIST_REQUEST',
			})

			const {
				userInfo: { user },
				movieDetails: { details },
			} = getState()

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			const { data } = await axios.post(
				'/api/movies/watchlist',
				{ user, details },
				config
			)

			dispatch({
				type: 'ADD_TO_WATCHLIST_SUCCESS',
				payload: data.message,
			})
		} catch (error) {
			dispatch({
				type: 'ADD_TO_WATCHLIST_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}
