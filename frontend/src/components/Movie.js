import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDotCircle } from '@fortawesome/free-solid-svg-icons';

import CastSlider from './CastSlider';

//# Src on mapping empty array https://stackoverflow.com/questions/63061563/returning-jsx-instead-of-empty-array-with-array-filter-map

// Could use Optional Chaining (details?.title) instead of (details.title && details.title),
//  but I would have to eject in CRA and use Babel manually

const Movie = ({ details, cast, addMovie, deleteMovie, user, watchlist }) => {
	const existingMovie = watchlist.filter((movie) => {
		return movie.id === details.id;
	});

	return (
		<div className='movie'>
			<img
				className='movie__img'
				src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
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
						<p className='movie__details--info-text'>
							{details.release_date && details.release_date.split('-')[0]}
						</p>
						<p className='movie__details--info-text'>{details.runtime}min</p>

						{details.spoken_languages &&
							details.spoken_languages.length > 0 && (
								<p className='movie__details--info-text'>
									{details.spoken_languages && details.spoken_languages[0].name}
								</p>
							)}
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
										<FontAwesomeIcon
											className='movie__genres--links-icon'
											icon={faDotCircle}
										/>
										{genre.name}
									</Link>
								);
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
					{!user && (
						<button className='movie__links--link btn'>
							Please sign in to save to watchlist
						</button>
					)}

					{existingMovie.length
						? existingMovie.map((movie) => {
								return (
									<button
										onClick={deleteMovie}
										key={movie.id}
										className='movie__links--link btn'
									>
										Remove from Watchlist
									</button>
								);
						  })
						: user && (
								<button onClick={addMovie} className='movie__links--link btn'>
									Add to Watchlist
								</button>
						  )}

					{details.imdb_id && (
						<a
							className='movie__links--link btn btn__imdb'
							href={`https://www.imdb.com/title/${details.imdb_id}/`}
							target='_blank'
							rel='noreferrer'
						>
							IMDB
						</a>
					)}

					{details.videos && details.videos.results.length > 0 && (
						<a
							className='movie__links--link btn btn__trailer'
							href={`https://www.youtube.com/watch?v=${details.videos.results[0].key}`}
							target='_blank'
							rel='noreferrer'
						>
							Trailer
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

Movie.propTypes = {
	details: PropTypes.object.isRequired,
	cast: PropTypes.array.isRequired,
	addMovie: PropTypes.func,
	user: PropTypes.object,
	watchlist: PropTypes.array,
};

export default Movie;
