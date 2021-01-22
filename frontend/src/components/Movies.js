import React from 'react'
import { Link } from 'react-router-dom'

const Movies = ({ movies }) => {
	return (
		<div className='movies'>
			{movies.map((movie) => {
				return (
					<div key={movie.id} className='movies__item'>
						<Link to={`/movie/${movie.id}`}>
							<img
								key={movie.id}
								src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
								className='movies__item-img'
								alt={`A poster of ${movie.title}`}
							></img>
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default Movies
