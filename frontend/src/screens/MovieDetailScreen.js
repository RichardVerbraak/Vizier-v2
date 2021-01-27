import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { getMovieDetails, getRecommendedMovies } from '../actions/movies'
import Navigation from '../components/Navigation'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

// TODO: Make Details & Recommended into own component

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
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				{loading ? (
					<Loader />
				) : error ? (
					<p>{error}</p>
				) : (
					<Movie details={details} />
				)}

				<div>
					<h1 className='header__sub'>Recommended</h1>
					{loadingRecommended ? (
						<Loader />
					) : errorRecommended ? (
						<p>{error}</p>
					) : (
						<div>
							<Movies movies={movies} />
						</div>
					)}
				</div>
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
