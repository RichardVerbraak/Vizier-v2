import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'
import WatchListScreen from './screens/WatchListScreen'

const App = () => {
	return (
		<Router>
			<div>
				<Route path='/login' component={LoginScreen} />
				<Route path='/register' component={RegisterScreen} />

				<Route path='/movie/:id/:page?' component={MovieDetailScreen} />

				<Route path='/search/:query/:page?' component={HomeScreen} />

				<Route path='/genres/:genre/:page?' component={HomeScreen} />

				<Route path='/discover/:trending/:page?' component={HomeScreen} />

				<Route path='/watchlist' component={WatchListScreen} />

				<Route path='/' exact>
					<Redirect to='/discover/popular' component={HomeScreen} />
				</Route>
			</div>
		</Router>
	)
}

export default App
