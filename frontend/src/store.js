import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { movieListReducer } from './reducers/movieReducer'

const middleware = [thunk]

const reducers = combineReducers({
	movieList: movieListReducer,
})

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
