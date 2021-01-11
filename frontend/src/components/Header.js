import React from 'react'

// TODO: Uppercase first letter (or uppercase everything) and remove underscore from top_rated
// OR operator or two h3s?
const Header = ({ trending, genre }) => {
	return (
		<div>
			<h2>Movies</h2>
			<h3>{trending && trending}</h3>
			<h3>{genre && genre}</h3>
		</div>
	)
}

export default Header
