import React from 'react'
import PropTypes from 'prop-types'

// TODO: Uppercase first letter (or uppercase everything) and remove underscore from top_rated
// OR operator or two h3s?
const Header = ({ trending, genre, title, search }) => {
	return (
		<div className='header'>
			<div className='header__box'>
				<h2 className='header__box--main'>{title}</h2>
				{search && <h3 className='header__box--sub'>{search}</h3>}
				{trending && <h3 className='header__box--sub'>{trending}</h3>}
				{genre && <h3 className='header__box--sub'>{genre}</h3>}
			</div>
		</div>
	)
}

Header.propTypes = {
	trending: PropTypes.string,
	genre: PropTypes.string,
	title: PropTypes.string,
}

export default Header
