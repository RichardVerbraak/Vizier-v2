import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MovieDetailScreen = ({ match }) => {
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

	// useEffect(() => {
	//     dispatch(movieDetails(movieID))
	// }, [dispatch])

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
