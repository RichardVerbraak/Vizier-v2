import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

// TODO: Add replacement image if there isnt a poster for the movie
// Source on Array.from fix for React keys: https://stackoverflow.com/questions/49677220/reactjs-array-fill-with-key-in-jsx-element
// Fill only returned the same span each time while from iterates on an array-like object, in this case just an array,-
// and iterates over the array returning a div with the index as its key (the underscore is a convention when an argument is irrelevant)

// 20 vs 21 results bug from MovieDB API
// MovieDB API keeps changing their results for fetching movies as in, all of the API fetches 20 results per page
// but Recommended movies are fetching 21 results causing the app to crash since I hardcoded the new array to expect 20 results

const Movies = ({ movies }) => {
	console.log(movies)

	return (
		<div className='movies'>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className='movies__item'>
						<Link to={`/movie/${movie.id}`}>
							<img
								key={movie.id}
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								className='movies__item--img'
								alt={`A poster of ${movie.title}`}
							></img>
							<img
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								className='movies__item--img-back'
								alt={`A poster of ${movie.title}`}
							></img>
						</Link>
					</div>
				)
			})}

			{Array.from(Array(21 - movies.length), (_, i) => (
				<div key={i} className='movies__empty'></div>
			))}
		</div>
	)
}

Movies.propTypes = {
	movies: PropTypes.array.isRequired,
}

export default Movies
