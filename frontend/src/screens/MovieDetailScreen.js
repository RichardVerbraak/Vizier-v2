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
	addToWatchList,
} from '../actions/movies'
import Header from '../components/Header'

const MovieDetailScreen = ({ match, history }) => {
	const movieID = match.params.id
	const page = Number(match.params.page) || 1

	const dispatch = useDispatch()

	const movieDetails = useSelector((state) => {
		return state.movieDetails
	})
	const { loading: loadingDetails, errorDetails, details } = movieDetails

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
	const { watchlist, loading: loadingWatchList } = movieWatchList

	const movieAddWatchList = useSelector((state) => {
		return state.movieAddWatchList
	})
	const { success } = movieAddWatchList

	const addMovie = () => {
		dispatch(addToWatchList())
	}

	useEffect(() => {
		if (user || success) {
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
	}, [dispatch, history, movieID, page, user, success])

	return (
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				{loadingDetails || loadingCast || loadingWatchList ? (
					<Loader />
				) : errorDetails ? (
					<ErrorMessage error={errorDetails} />
				) : (
					<Movie
						details={details}
						cast={cast}
						addMovie={addMovie}
						watchlist={watchlist}
					/>
				)}

				{loadingRecommended ? (
					<Loader />
				) : errorRecommended ? (
					<p>{errorRecommended}</p>
				) : (
					<div>
						<Header title={'Recommended'} />
						<Movies movies={movies} />
						<Pagination page={page} movieID={movieID} totalPages={totalPages} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
