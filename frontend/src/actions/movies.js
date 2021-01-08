import axios from 'axios'

// If page is left empty it will default to 1 in the movieController
export const getMovies = (page = '', trending) => {
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
				payload: error,
			})
		}
	}
}

export const getMoviesByGenre = (genreID) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIES_BY_GENRE_REQUEST',
			})

			const { data } = await axios.get('/api/movies/genres/18')

			dispatch({
				type: 'GET_MOVIES_BY_GENRE_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIES_BY_GENRE_FAIL',
				payload: error,
			})
		}
	}
}

export const getMovieDetails = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIE_DETAILS',
			})

			const { data } = await axios.get(`/api/movies/${id}`)

			dispatch({
				type: 'GET_MOVIE_DETAILS_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_MOVIE_DETAILS_FAIL',
				payload: error,
			})
		}
	}
}

export const getRecommendedMovies = (id) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_REQUEST',
			})

			const { data } = await axios.get(`/api/movies/${id}/recommended`)

			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'GET_RECOMMENDED_MOVIES_FAIL',
				payload: error,
			})
		}
	}
}
