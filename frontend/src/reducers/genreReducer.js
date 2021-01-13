const initialState = {
	loading: false,
	error: false,
	genres: [],
}

export const genreReducer = (state = initialState, action) => {
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
