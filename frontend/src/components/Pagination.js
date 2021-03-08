import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const Pagination = ({ page, totalPages, match, location }) => {
	// Pushes the 'Page 2' button to the right side if it's the only button
	const buttonSpacing = page === 1 && 'flex-end'

	return (
		<div>
			<div className={`pagination ${buttonSpacing}`}>
				{page > 1 && (
					<Button className={'page btn'} url={'/'} text={`Page ${page - 1}`} />
				)}

				{page < totalPages && (
					<Button className={'page btn'} url={'/'} text={`Page ${page + 1}`} />
				)}
			</div>
		</div>
	)
}

Pagination.propTypes = {
	searchQuery: PropTypes.string,
	trending: PropTypes.string,
	genre: PropTypes.string,
	movieID: PropTypes.number,
	page: PropTypes.number,
	totalPages: PropTypes.number,
}

export default Pagination
