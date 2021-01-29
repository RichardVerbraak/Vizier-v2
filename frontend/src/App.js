import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'

// TODO: Somehow only using redirect doesnt work so I went back to loading the Redirect inside of a Route again
// TODO: Find another way for the genre movies to be loaded into HomeScreen instead of making another screen
// TODO: Make cleaner routes like /genres/:genre and another route with /genres/:genre/page/:pageNumber
const App = () => {
	return (
		<Router>
			<div>
				<Route path='/movie/:id/:page?' component={MovieDetailScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />

				<Route path='/search/:query/:page?' component={HomeScreen} />

				<Route path='/genres/:genre/:page?' component={HomeScreen} />

				<Route path='/discover/:trending/:page?' component={HomeScreen} />

				<Route path='/' component={HomeScreen} exact>
					<Redirect to='/discover/popular' component={HomeScreen} />
				</Route>
			</div>
		</Router>
	)
}

export default App
