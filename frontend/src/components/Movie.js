import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import CastSlider from './CastSlider'

const Movie = ({ details, cast }) => {
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
					<div className='movie__details--score'>
						<FontAwesomeIcon
							className='movie__details--score-star'
							icon={faStar}
						/>
						<p className='movie__details--score-rating'>
							{details.vote_average} / 10
						</p>
					</div>

					<div className='movie__details--info'>
						<p className='movie__details--info-year'>
							{details.release_date && details.release_date.split('-')[0]}
						</p>
						<p className='movie__details--info-runtime'>{details.runtime}min</p>
						<p className='movie__details--info-language'>
							{details.spoken_languages && details.spoken_languages[0].name}
						</p>
					</div>
				</div>

				<div className='movie__genres'>
					<h3 className='movie__genres--header'>Genres</h3>
					<div className='movie__genres--links'>
						{details.genres &&
							details.genres.map((genre) => {
								return (
									<Link
										to={`/genres/${genre.name}`}
										className='movie__genres--links-link'
										key={genre.id}
									>
										{genre.name}
									</Link>
								)
							})}
					</div>
				</div>

				<div className='movie__overview'>
					<p className='movie__overview--text'>{details.overview}</p>
				</div>

				<div className='movie__cast'>
					<CastSlider cast={cast} />
				</div>

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
