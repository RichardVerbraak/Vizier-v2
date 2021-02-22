import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import {
	getMovieDetails,
	getRecommendedMovies,
	getMovieCast,
} from '../actions/movies'

const MovieDetailScreen = ({ match, history }) => {
	const movieID = match.params.id
	const page = Number(match.params.page) || 1

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
		totalPages,
	} = movieRecommended

	const movieAddWatchList = useSelector((state) => {
		return state.movieAddWatchList
	})
	const { success, loadingSuccess, errorSuccess } = movieAddWatchList

	useEffect(() => {
		dispatch(getMovieDetails(movieID))
		dispatch(getMovieCast(movieID))
		dispatch(getRecommendedMovies(movieID, page))

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		// Scrolls to recommended section instead of all the way to the top if you go through Recommended movie pages
		if (page > 1) {
			window.scrollTo({
				top: 1050,
				behavior: 'smooth',
			})
		}
	}, [dispatch, history, movieID, page])

	return (
		<Fragment>
			<div className='container'>
				{loading || loadingCast || loadingSuccess ? (
					<Loader />
				) : error ? (
					<p>{error}</p>
				) : (
					<Movie
						details={details}
						cast={cast}
						success={success}
						errorSuccess={errorSuccess}
					/>
				)}

				{loadingRecommended ? (
					<Loader />
				) : errorRecommended ? (
					<p>{error}</p>
				) : (
					<div>
						<h1 className='header__recommended header__sub'>Recommended</h1>
						<Movies movies={movies} />
						<Pagination page={page} movieID={movieID} totalPages={totalPages} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
