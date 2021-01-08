import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ trending, page }) => {
	return (
		<div>
			<Link to={`/${trending}/${page + 1}`}>Page {page + 1}</Link>
		</div>
	)
}

export default Pagination
