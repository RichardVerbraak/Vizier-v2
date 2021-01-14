import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Make it so pagination works in HomeScreen and GenreScreen (pass in a prop to check which screen and then give different links based on that?)
// TODO: Refactor this screen to something simpler, it works currently but I feel like it could be improved and could do without passing props around
const Pagination = ({ screen, trending, genre, page, searchQuery }) => {
	return (
		<div>
			{searchQuery && (
				<div>
					{page > 1 && (
						<Link to={`/search/${searchQuery}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}
					<Link to={`/search/${searchQuery}/${page + 1}`}>Page {page + 1}</Link>
				</div>
			)}

			{screen === 'HomeScreen' && !searchQuery && (
				<div>
					{page > 1 && (
						<Link to={`/discover/${trending}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}
					<Link to={`/discover/${trending}/${page + 1}`}>Page {page + 1}</Link>
				</div>
			)}

			{screen === 'GenreScreen' && !searchQuery && (
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
