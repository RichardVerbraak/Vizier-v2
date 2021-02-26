import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navigation from '../components/Navigation'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import {
	getMovieDetails,
	getRecommendedMovies,
	getMovieCast,
	getWatchList,
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

	const userInfo = useSelector((state) => {
		return state.userInfo
	})
	const { user } = userInfo

	const movieWatchList = useSelector((state) => {
		return state.movieWatchList
	})
	const { watchlist } = movieWatchList

	useEffect(() => {
		if (user) {
			dispatch(getWatchList())
		}

		if (movieID) {
			dispatch(getMovieDetails(movieID))
			dispatch(getMovieCast(movieID))
			dispatch(getRecommendedMovies(movieID, page))
		} else {
			history.push('/')
		}

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
			<Navigation history={history} />
			<div className='container'>
				{loading || loadingCast ? (
					<Loader />
				) : error ? (
					<ErrorMessage error={error} />
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
						<Pagination page={page} movieID={movieID} totalPages={totalPages} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
