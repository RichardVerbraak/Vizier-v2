import axios from 'axios'

export const getMovies = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_MOVIES_REQUEST',
			})

			// Get /api/movies, give back data
			const { data } = await axios.get('/api/movies/popular')

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
