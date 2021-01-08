import React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'
import RegisterScreen from './screens/RegisterScreen'

const App = () => {
	return (
		<Router>
			<div>
				<Route path='/movie/:id' component={MovieDetailScreen} />
				<Route path='/register' component={RegisterScreen} />
				<Route path='/login' component={LoginScreen} />

				<Route path='/:trending/:page?' component={HomeScreen} exact />
				<Route path='/genres/:genre' component={HomeScreen} exact />

				<Route path='/' component={HomeScreen} exact>
					<Redirect to='/popular' />
				</Route>
			</div>
		</Router>
	)
}

export default App
