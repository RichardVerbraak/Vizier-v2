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

const MovieDetailScreen = ({ match, history, location }) => {
	const movieID = Number(match.params.id)
	const page = location.search ? Number(location.search.split('=')[1]) : 1

	const dispatch = useDispatch()

	const movieDetails = useSelector((state) => {
		return state.movieDetails
	})
	const { loading: loadingDetails, error: errorDetails, details } = movieDetails

	const movieCast = useSelector((state) => {
		return state.movieCast
	})
	const { loading: loadingCast, cast } = movieCast

	const movieList = useSelector((state) => {
		return state.movieList
	})

	const {
		movies,
		loading: loadingRecommended,
		error: errorRecommended,
		totalPages,
	} = movieList

	const userInfo = useSelector((state) => {
		return state.userInfo
	})
	const { user } = userInfo

	const movieWatchListAll = useSelector((state) => {
		return state.movieWatchListAll
	})
	const { watchlist, loading: loadingWatchList } = movieWatchListAll

	const addMovie = () => {
		dispatch(addToWatchList())
	}

	const deleteMovie = () => {
		dispatch(deleteFromWatchList())
	}

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
							totalPages={totalPages}
							location={location}
						/>
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default MovieDetailScreen
