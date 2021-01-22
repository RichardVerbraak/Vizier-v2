import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Uppercase first letter (or uppercase everything) and remove underscore from top_rated
// OR operator or two h3s?
const Header = ({ trending, genre }) => {
	console.log(trending)

	return (
		<div className='header'>
			<div header__title>
				<h2 className='header__main'>Movies</h2>
				<h3 className='header__sub'>{trending && trending}</h3>
			</div>

			<div className='header__links'>
				<Link to='/discover/popular'>Popular</Link>
				<Link to='/discover/top_rated'>Top Rated</Link>
				<Link to='/discover/upcoming'>Upcoming</Link>
			</div>
		</div>
	)
}

export default Header
