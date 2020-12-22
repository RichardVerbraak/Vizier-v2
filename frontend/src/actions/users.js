import axios from 'axios'

export const registerUser = (user) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'USER_REGISTER_REQUEST',
			})

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			const { data } = await axios.post('/api/users', config, user)

			dispatch({
				type: 'USER_REGISTER_SUCCESS',
				payload: data,
			})
		} catch (error) {
			dispatch({
				type: 'USER_REGISTER_FAIL',
				payload: error,
			})
		}
	}
}
