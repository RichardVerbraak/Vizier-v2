import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	movieAddWatchListReducer,
	movieCastReducer,
	movieDeleteWatchListReducer,
	movieDetailReducer,
	movieListReducer,
	movieWatchListAllReducer,
	movieWatchListReducer,
} from './reducers/movieReducer'
import { userReducer } from './reducers/userReducer'
import { genreReducer } from './reducers/genreReducer'

const middleware = [thunk]

const reducers = combineReducers({
	movieList: movieListReducer,
	movieDetails: movieDetailReducer,
	movieCast: movieCastReducer,

	movieWatchList: movieWatchListReducer,
	movieWatchListAll: movieWatchListAllReducer,
	movieAddWatchList: movieAddWatchListReducer,
	movieDeleteWatchList: movieDeleteWatchListReducer,

	genreList: genreReducer,

	userInfo: userReducer,
})

// User gets saved to localStorage upon registering/logging in
// This sets the user reducer's initial state to the one in localStorage if there is one
const userFromLocalStorage = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: null

const initialState = {
	userInfo: { user: userFromLocalStorage },
}

const store = createStore(
	reducers,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
