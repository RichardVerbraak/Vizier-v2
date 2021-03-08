import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

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
	totalPagesRecommended,
	totalPagesWatchList,
}) => {
	// Pushes the 'Page 2' button to the right side if it's the only button
	const buttonSpacing = page === 1 && 'flex-end'

	return (
		<div>
			{searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Button
							className={'page btn'}
							url={`/search/${searchQuery}/${page - 1}`}
							text={`Page ${page - 1}`}
						/>
					)}

					{page < totalPages && (
						<Button
							className={'page btn'}
							url={`/search/${searchQuery}/${page + 1}`}
							text={`Page ${page + 1}`}
						/>
					)}
				</div>
			)}

			{trending && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Button
							className={'page btn'}
							url={`/discover/${trending}/${page - 1}`}
							text={`Page ${page - 1}`}
						/>
					)}

					{page < totalPages && (
						<Button
							className={'page btn'}
							url={`/discover/${trending}/${page + 1}`}
							text={`Page ${page + 1}`}
						/>
					)}
				</div>
			)}

			{genre && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Button
							className={'page btn'}
							url={`/genres/${genre}/${page - 1}`}
							text={`Page ${page - 1}`}
						/>
					)}

					{page < totalPages && (
						<Button
							className={'page btn'}
							url={`/genres/${genre}/${page + 1}`}
							text={`Page ${page + 1}`}
						/>
					)}
				</div>
			)}

			{movieID && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Button
							className={'page btn'}
							url={`/movie/${movieID}/${page - 1}`}
							text={`Page ${page - 1}`}
						/>
					)}

					{page < totalPagesRecommended && (
						<Button
							className={'page btn'}
							url={`/movie/${movieID}/${page + 1}`}
							text={`Page ${page + 1}`}
						/>
					)}
				</div>
			)}

			{totalPagesWatchList && !searchQuery && (
				<div className={`pagination ${buttonSpacing}`}>
					{page > 1 && (
						<Button
							className={'page btn'}
							url={`/watchlist/?page=${page - 1}`}
							text={`Page ${page - 1}`}
						/>
					)}

					{page < totalPagesWatchList && (
						<Button
							className={'page btn'}
							url={`/watchlist/?page=${page + 1}`}
							text={`Page ${page + 1}`}
						/>
					)}
				</div>
			)}
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
