import React from 'react'

const Movies = ({ movies }) => {
	return (
		<div>
			{movies.map((movie) => {
				return <p key={movie.id}>{movie.original_title}</p>
			})}
		</div>
	)
}

export default Movies
