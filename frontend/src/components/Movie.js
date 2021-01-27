import React from 'react'

const Movie = ({ details }) => {
	return (
		<div className='movie'>
			<img
				className='movie__img'
				src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
				alt={`A poster of ${details.title}`}
			></img>

			<div className='movie__content'>
				<div className='movie__heading'>
					<h1 className='movie__heading--main'>{details.title}</h1>
					<h2 className='movie__heading--sub'>{details.tagline}</h2>
				</div>

				<div className='movie__details'>
					<p className='movie__details--genre'>Drama | Crime</p>
					<p className='movie__details--score'>{details.vote_average} / 10</p>
					<p className='movie__details--runtime'>{details.runtime}min</p>
				</div>

				<div className='movie__overview'>
					<p className='movie__overview--text'>{details.overview}</p>
				</div>

				<div className='movie__cast'>slider</div>

				<div className='movie__links'>
					<button className='movie__links--watchlist btn btn__watchlist'>
						Add to watchlist
					</button>

					{details.imdb_id && (
						<a
							className='movie__links--watchlist btn btn__imdb'
							href={`https://www.imdb.com/title/${details.imdb_id}/`}
						>
							IMDB
						</a>
					)}
					{details.videos && (
						<a
							className='movie__links--watchlist btn btn__trailer'
							href={`https://www.youtube.com/watch?v=${details.videos.results[0].key}`}
						>
							Trailer
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default Movie
