import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ page }) => {
	return (
		<div>
			<Link to={`/popular/${page + 1}`}>Page {page + 1}</Link>
		</div>
	)
}

export default Pagination
