import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
	return (
		<div className='navbar'>
			<h1 className='navbar__logo'>Logo</h1>
			<h3>Search component</h3>

			<div className='navbar__links'>
				<Link className='navbar__links--link'>Placeholder</Link>
				<Link className='navbar__links--link'>Genres</Link>
				<Link className='navbar__links--link'>Your List</Link>
				<Link className='navbar__links--link'>Sign In</Link>
			</div>
		</div>
	)
}

export default Navigation
