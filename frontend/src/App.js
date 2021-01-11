import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'
import GenreScreen from './screens/GenreScreen'

// TODO: Find another way for the genre movies to be loaded into HomeScreen instead of making another screen
const App = () => {
	return (
		<Router>
			<div className='container'>
				<Route path='/movie/:id' component={MovieDetailScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />

				<Route path='/genres/:genre/:page?' component={GenreScreen} />

				<Route path='/discover/:trending/:page?' component={HomeScreen} />

				<Route path='/' component={HomeScreen} exact>
					<Redirect to='/discover/popular' />
				</Route>
			</div>
		</Router>
	)
}

export default App
