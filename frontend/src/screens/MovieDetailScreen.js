import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import {
	getMovieDetails,
	getRecommendedMovies,
	getMovieCast,
} from '../actions/movies'
import Navigation from '../components/Navigation'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

const MovieDetailScreen = ({ match, history }) => {
	const movieID = match.params.id

	const dispatch = useDispatch()

	const movieDetails = useSelector((state) => {
		return state.movieDetails
	})
	const { loading, error, details } = movieDetails

	const movieCast = useSelector((state) => {
		return state.movieCast
	})
	const { loadingCast, errorCast, cast } = movieCast

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
			dispatch(getMovieCast(movieID))
			dispatch(getRecommendedMovies(movieID))

			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		} else {
			history.push('/')
		}
	}, [dispatch, history, movieID])

	return (
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				{loading || loadingCast ? (
					<Loader />
				) : error ? (
					<p>{error}</p>
				) : (
					<Movie details={details} cast={cast} />
				)}

				{loadingRecommended ? (
					<Loader />
				) : errorRecommended ? (
					<p>{error}</p>
				) : (
					<div>
						<h1 className='header__recommended header__sub'>Recommended</h1>
						<Movies movies={movies} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
