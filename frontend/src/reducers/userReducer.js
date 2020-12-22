export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case 'USER_REGISTER_REQUEST':
			return {
				loading: true,
			}

		case 'USER_REGISTER_SUCCESS':
			return {
				loading: false,
				user: action.payload,
			}

		case 'USER_REGISTER_FAIL':
			return {
				loading: false,
				error: action.payload,
			}

		default: {
			return state
		}
	}
}
