import React from 'react'

// TODO: Uppercase first letter (or uppercase everything) and remove underscore from top_rated
// OR operator or two h3s?
const Header = ({ trending, genre, title }) => {
	return (
		<div className='header'>
			<div className='header__box'>
				<h2 className='header__box--main'>{title}</h2>
				{trending && <h3 className='header__box--sub'>{trending}</h3>}
				{genre && <h3 className='header__box--sub'>{genre}</h3>}
			</div>
		</div>
	)
}

export default Header
