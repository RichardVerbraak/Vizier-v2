import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
	movieDetailReducer,
	movieListRecommendedReducer,
	movieListReducer,
} from './reducers/movieReducer'
import { userReducer } from './reducers/userReducer'

const middleware = [thunk]

const reducers = combineReducers({
	movieList: movieListReducer,
	movieRecommended: movieListRecommendedReducer,
	movieDetails: movieDetailReducer,

	user: userReducer,
})

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
