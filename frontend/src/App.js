import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'

// Not sure about this many routes, don't know how to make them more 'dynamic'
const App = () => {
	return (
		<Router>
			<div>
				<Route path='/movie/:id' component={MovieDetailScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />

				<Route path='/popular' component={HomeScreen} exact />
				<Route path='/top_rated' component={HomeScreen} exact />
				<Route path='/upcoming' component={HomeScreen} exact />

				<Route path='/popular/:page' component={HomeScreen} />
				<Route path='/top_rated/:page' component={HomeScreen} />
				<Route path='/upcoming/:page' component={HomeScreen} />

				<Route path='/' component={HomeScreen} exact />
			</div>
		</Router>
	)
}

export default App
