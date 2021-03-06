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

			const { data } = await axios.post('/api/users', user, config)

			dispatch({
				type: 'USER_REGISTER_SUCCESS',
			})

			dispatch({
				type: 'USER_LOGIN_SUCCESS',
				payload: data,
			})

			localStorage.setItem('user', JSON.stringify(data))
		} catch (error) {
			dispatch({
				type: 'USER_REGISTER_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const loginUser = (user) => {
	return async (dispatch) => {
		try {
			dispatch({
				type: 'USER_LOGIN_REQUEST',
			})

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			const { data } = await axios.post('/api/users/login', user, config)

			dispatch({
				type: 'USER_LOGIN_SUCCESS',
				payload: data,
			})

			localStorage.setItem('user', JSON.stringify(data))
		} catch (error) {
			dispatch({
				type: 'USER_LOGIN_FAIL',
				payload:
					error.response && error.response.data.message
						? error.response.data.message
						: error,
			})
		}
	}
}

export const logoutUser = () => {
	return async (dispatch) => {
		dispatch({
			type: 'USER_LOGOUT',
		})

		dispatch({
			type: 'RESET_WATCHLIST',
		})

		localStorage.removeItem('user')
	}
}
