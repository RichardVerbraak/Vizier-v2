import React from 'react'
import PropTypes from 'prop-types'

// Regex to remove underscore from top_rated
const Header = ({ trending, genre, title, search }) => {
	return (
		<div className='header'>
			<div className='header__box'>
				<h2 className='header__box--main'>{title}</h2>
				{search && <h3 className='header__box--sub'>{search}</h3>}
				{trending && (
					<h3 className='header__box--sub'>{trending.replace(/_/g, ' ')}</h3>
				)}
				{genre && <h3 className='header__box--sub'>{genre}</h3>}
			</div>
		</div>
	)
}

Header.propTypes = {
	search: PropTypes.string,
	trending: PropTypes.string,
	genre: PropTypes.string,
	title: PropTypes.string,
}

export default Header
