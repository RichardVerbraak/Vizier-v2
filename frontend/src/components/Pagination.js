import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Make it so pagination works in HomeScreen and GenreScreen (pass in a prop to check which screen and then give different links based on that?)
const Pagination = ({ screen, trending, genre, page }) => {
	return (
		<div>
			{screen === 'HomeScreen' && (
				<div>
					{page > 1 && (
						<Link to={`/discover/${trending}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}
					<Link to={`/discover/${trending}/${page + 1}`}>Page {page + 1}</Link>
				</div>
			)}
			{screen === 'GenreScreen' && (
				<div>
					{page > 1 && (
						<Link to={`/genres/${genre}/${page - 1}`}>Page {page - 1}</Link>
					)}

					<Link to={`/genres/${genre}/${page + 1}`}>Page {page + 1}</Link>
				</div>
			)}
		</div>
	)
}

export default Pagination
