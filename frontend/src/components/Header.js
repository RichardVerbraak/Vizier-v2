import React from 'react'

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
		</div>
	)
}

export default Header
