export const genreReducer = (state = { genres: [] }, action) => {
	switch (action.type) {
		case 'GET_GENRES_REQUEST':
			return {
				loading: true,
			}

		case 'GET_GENRES_SUCCESS':
			return {
				loading: false,
				genres: action.payload,
			}

		case 'GET_GENRES_FAIL':
			return {
				loading: false,
				error: action.payload,
			}

		default:
			return state
	}
}
