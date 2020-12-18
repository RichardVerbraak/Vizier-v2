import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieDetails, getRecommendedMovies } from '../actions/movies'

const MovieDetailScreen = ({ match, history }) => {
	const movieID = match.params.id

	const dispatch = useDispatch()

	const movieDetails = useSelector((state) => {
		return state.movieDetails
	})
	const { loading, error, details } = movieDetails

	const movieRecommended = useSelector((state) => {
		return state.movieRecommended
	})
	const {
		loading: loadingRecommended,
		error: errorRecommended,
		movies,
	} = movieRecommended

	useEffect(() => {
		if (movieID) {
			dispatch(getMovieDetails(movieID))
			dispatch(getRecommendedMovies(movieID))
		} else {
			history.push('/')
		}
	}, [dispatch, history, movieID])

	return (
		<div>
			<div>
				<h1>Details</h1>
				{loading ? (
					<p>Loading...</p>
				) : error ? (
					<p>{error}</p>
				) : (
					<p>{details.original_title}</p>
				)}
			</div>

			<div>
				<h2>Recommended</h2>
				{loadingRecommended ? (
					<p>Loading...</p>
				) : errorRecommended ? (
					<p>{error}</p>
				) : (
					<div>
						{movies.map((movie) => {
							return <p key={movie.id}>{movie.original_title}</p>
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default MovieDetailScreen
