import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	movieCastReducer,
	movieDetailReducer,
	movieListRecommendedReducer,
	movieListReducer,
} from './reducers/movieReducer'
import { userReducer } from './reducers/userReducer'
import { genreReducer } from './reducers/genreReducer'

const middleware = [thunk]

const reducers = combineReducers({
	movieList: movieListReducer,
	movieRecommended: movieListRecommendedReducer,
	movieDetails: movieDetailReducer,
	movieCast: movieCastReducer,
	// movieWatchList: movieWatchListReducer,

	genreList: genreReducer,

	userInfo: userReducer,
})

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
