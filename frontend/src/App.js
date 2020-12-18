import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomeScreen from './screens/HomeScreen'
import MovieDetailScreen from './screens/MovieDetailScreen'

const App = () => {
	return (
		<Router>
			<Route path='/' component={HomeScreen} exact />
			<Route path='/:id' component={MovieDetailScreen} />
		</Router>
	)
}

export default App
