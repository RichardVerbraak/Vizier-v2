import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	movieDetailReducer,
	movieListRecommendedReducer,
	movieListReducer,
} from './reducers/movieReducer'
import { userLoginReducer, userReducer } from './reducers/userReducer'
import { genreReducer } from './reducers/genreReducer'

const middleware = [thunk]

const reducers = combineReducers({
	movieList: movieListReducer,
	movieRecommended: movieListRecommendedReducer,
	movieDetails: movieDetailReducer,

	genreList: genreReducer,

	userInfo: userReducer,
	userLogin: userLoginReducer,
})

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
