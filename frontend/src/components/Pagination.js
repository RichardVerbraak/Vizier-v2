import React from 'react'
import { Link } from 'react-router-dom'

// TODO: Refactor this screen to something simpler, it works currently but I feel like it could be improved and could do without passing props around

//#### Pagination will be rendered based on which props it will receive (aka which screen it's being rendered in)
//# searchQuery comes from the Search Component
//# Trending is from the HomeScreen with Popular, Top Rated and Upcoming trends
//# Genre is also from the HomeScreen when you're looking for movies based upon the genre
//# movieID is coming from the MovieDetailScreen
//# totalPages is from the Recommended component to look how many buttons should be rendered

//# Page is coming from all the components with access match.props (react-router Routes)

const Pagination = ({
	searchQuery,
	trending,
	genre,
	page,
	movieID,
	totalPages,
}) => {
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

					{page < totalPages && (
						<Link
							className='page btn'
							to={`/search/${searchQuery}/${page + 1}`}
						>
							Page {page + 1}
						</Link>
					)}
				</div>
			)}

			{trending && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/discover/${trending}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}

					{page < totalPages && (
						<Link className='page btn' to={`/discover/${trending}/${page + 1}`}>
							Page {page + 1}
						</Link>
					)}
				</div>
			)}

			{genre && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/genres/${genre}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}

					{page < totalPages && (
						<Link className='page btn' to={`/genres/${genre}/${page + 1}`}>
							Page {page + 1}
						</Link>
					)}
				</div>
			)}

			{movieID && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Link className='page btn' to={`/movie/${movieID}/${page - 1}`}>
							Page {page - 1}
						</Link>
					)}

					{page < totalPages && (
						<Link className='page btn' to={`/movie/${movieID}/${page + 1}`}>
							Page {page + 1}
						</Link>
					)}
				</div>
			)}
		</div>
	)
}

export default Pagination
