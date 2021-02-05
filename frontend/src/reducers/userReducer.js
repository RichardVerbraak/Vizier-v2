// Refactor?
export const userReducer = (state = {}, action) => {
	switch (action.type) {
		// Register
		case 'USER_REGISTER_REQUEST':
			return {
				loading: true,
			}

		case 'USER_REGISTER_SUCCESS':
			return {
				loading: false,
			}

		case 'USER_REGISTER_FAIL':
			return {
				loading: false,
				error: action.payload,
			}

		// Login
		case 'USER_LOGIN_REQUEST':
			return {
				loading: true,
			}

		case 'USER_LOGIN_SUCCESS':
			return {
				loading: false,
				user: action.payload,
			}

		case 'USER_LOGIN_FAIL':
			return {
				loading: false,
				error: action.payload,
			}

		case 'USER_LOGOUT':
			return {}

		default: {
			return state
		}
	}
}

// export const userLoginReducer = (state = {}, action) => {
// 	switch (action.type) {
// 		case 'USER_LOGIN_REQUEST':
// 			return {
// 				loading: true,
// 			}

// 		case 'USER_LOGIN_SUCCESS':
// 			return {
// 				loading: false,
// 				user: action.payload,
// 			}

// 		case 'USER_LOGIN_FAIL':
// 			return {
// 				loading: false,
// 				error: action.payload,
// 			}

// 		case 'USER_LOGOUT':
// 			return {}

// 		default:
// 			return state
// 	}
// }
