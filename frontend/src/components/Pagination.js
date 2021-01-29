import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Look at total pages and stop rendering a button if there arent anymore pages
// TODO: Refactor this screen to something simpler, it works currently but I feel like it could be improved and could do without passing props around
const Pagination = ({ movieID, trending, genre, page, searchQuery }) => {
	// Pushes the 'Page 2' button to the right side if it's the only button
	const buttonSpacing = page === 1 && 'flex-end'

	return (
		<div>
			{searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link
							className='page btn'
							to={`/search/${searchQuery}/${page - 1}`}
						>
							Page {page - 1}
						</Link>
					)}
					<Link className='page btn' to={`/search/${searchQuery}/${page + 1}`}>
						Page {page + 1}
					</Link>
				</div>
			)}

			{trending && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/discover/${trending}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}
					<Link className='page btn' to={`/discover/${trending}/${page + 1}`}>
						Page {page + 1}
					</Link>
				</div>
			)}

			{genre && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/genres/${genre}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}

					<Link className='page btn' to={`/genres/${genre}/${page + 1}`}>
						Page {page + 1}
					</Link>
				</div>
			)}

			{movieID && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/movie/${movieID}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}

					<Link className='page btn' to={`/movie/${movieID}/${page + 1}`}>
						Page {page + 1}
					</Link>
				</div>
			)}
		</div>
	)
}

export default Pagination
