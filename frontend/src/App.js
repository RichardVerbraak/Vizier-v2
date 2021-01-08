import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'
import GenreScreen from './screens/GenreScreen'
import Test from './screens/Test'

const App = () => {
	return (
		<Router>
			<div>
				<Route path='/movie/:id' component={MovieDetailScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />

				<Route path='/genres/:genre' component={GenreScreen} />

				<Route path='/discover/:trending/:page?' component={HomeScreen} />

				<Route path='/' component={HomeScreen} exact>
					<Redirect to='/discover/popular' />
				</Route>
			</div>
		</Router>
	)
}

export default App
