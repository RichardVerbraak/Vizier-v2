import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Uppercase first letter (or uppercase everything) and remove underscore from top_rated
// OR operator or two h3s?
const Header = ({ trending, genre }) => {
	return (
		<div className='header'>
			<div header__title>
				<h2 className='header__main'>Movies</h2>
				{trending && <h3 className='header__sub'>{trending}</h3>}
				{genre && <h3 className='header__sub'>{genre}</h3>}
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
