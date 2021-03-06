import axios from 'axios'

export const getGenres = () => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'GET_GENRES_REQUEST',
			})

			const { data } = await axios.get('/api/genres')

			dispatch({
				type: 'GET_GENRES_SUCCESS',
				payload: data.genres,
			})
		} catch (error) {
			dispatch({
				type: 'GET_GENRES_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}
