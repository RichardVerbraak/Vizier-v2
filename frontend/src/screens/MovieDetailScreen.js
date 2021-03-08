import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import Movie from '../components/Movie'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import {
	getMovieDetails,
	getRecommendedMovies,
	getMovieCast,
	addToWatchList,
	deleteFromWatchList,
	getWatchListAll,
} from '../actions/movies'

// ## Render add / remove button when movie is addded
// 1.

const MovieDetailScreen = ({ match, history }) => {
	const movieID = Number(match.params.id)
	const page = Number(match.params.page) || 1

	const dispatch = useDispatch()

	const movieDetails = useSelector((state) => {
		return state.movieDetails
	})
	const { loading: loadingDetails, error: errorDetails, details } = movieDetails

	// Use errorCast with error component
	const movieCast = useSelector((state) => {
		return state.movieCast
	})
	const { loading: loadingCast, cast } = movieCast

	const movieRecommended = useSelector((state) => {
		return state.movieRecommended
	})
	const {
		loading: loadingRecommended,
		error: errorRecommended,
		movies,
		totalPagesRecommended,
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
	const { success: successAdd, loading: loadingAdd } = movieAddWatchList

	const movieDeleteWatchList = useSelector((state) => {
		return state.movieDeleteWatchList
	})
	const {
		success: successDelete,
		loading: loadingDelete,
	} = movieDeleteWatchList

	const addMovie = () => {
		dispatch(addToWatchList())
	}

	const deleteMovie = () => {
		dispatch(deleteFromWatchList())
	}

	console.log(watchlist)

	useEffect(() => {
		if (user) {
			dispatch(getWatchListAll())
		}

		dispatch(getMovieDetails(movieID))
		dispatch(getMovieCast(movieID))
		dispatch(getRecommendedMovies(movieID, page))

		// Scroll to top
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})

		// Scrolls to recommended section when you go through Recommended movies
		if (page > 1) {
			window.scrollTo({
				top: 1050,
				behavior: 'smooth',
			})
		}
	}, [dispatch, history, movieID, page, user])

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
						user={user}
						watchlist={watchlist}
						addMovie={addMovie}
						deleteMovie={deleteMovie}
					/>
				)}

				{loadingRecommended ? (
					<Loader />
				) : errorRecommended ? (
					<ErrorMessage error={errorRecommended} />
				) : (
					<div>
						<Header title={'Recommended'} />
						<Movies movies={movies} />
						<Pagination
							page={page}
							movieID={movieID}
							totalPagesRecommended={totalPagesRecommended}
						/>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
