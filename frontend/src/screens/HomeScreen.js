import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovies, getMoviesBySearch } from '../actions/movies'
import { getMoviesByGenre } from '../actions/movies'

import Header from '../components/Header'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Navigation from '../components/Navigation'
import Pagination from '../components/Pagination'

// Notes are in the older project on all the issues I had including links, might compile them in a single file later on

// TODO: Make error and loading component
// TODO: Make seperate components for movies and header (user info + sign in button etc)
// TODO: Make components for the links

const HomeScreen = ({ match, history }) => {
	// Convert from string to number
	const page = Number(match.params.page) || 1

	const trending = match.params.trending

	const searchQuery = match.params.query || ''

	const genre = match.params.genre || ''

	const dispatch = useDispatch()

	const movieList = useSelector((state) => {
		return state.movieList
	})

	const { movies, loading, error, totalPages } = movieList

	const userLogin = useSelector((state) => {
		return state.userLogin
	})
	const { user, userLoading, userError } = userLogin

	const genreList = useSelector((state) => {
		return state.genreList
	})
	const { genres, genreLoading, genreError } = genreList

	useEffect(() => {
		// Search for movies if any query
		if (searchQuery) {
			dispatch(getMoviesBySearch(searchQuery, page))
		}

		// Get movies if Popular, Top Rated or Upcoming
		if (trending) {
			dispatch(getMovies(page, trending))
		}

		// When genres get loaded into Redux, find the name of that genre that also matches the genre in the URL => return the ID
		// then search by that genre of movies in the backend side (the call to the API needs the ID of the genre)
		if (genres) {
			const genreID = genres.find((x) => {
				return x.id && x.name.toLowerCase() === genre.toLowerCase()
			})

			if (genreID) {
				dispatch(getMoviesByGenre(page, genreID.id))
			} else {
				// Insert message with 'something went wrong'
			}
		}

		// Smooth scroll to top, not perfect but not sure how to improve upon
		if (movies) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
		//eslint-disable-next-line
	}, [dispatch, page, trending, searchQuery, genre])

	return (
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				<Header trending={trending} genre={genre} />

				{loading ? (
					<Loader />
				) : error ? (
					<h1>{error}</h1>
				) : (
					<div>
						<Movies movies={movies} />
					</div>
				)}

				<Pagination
					trending={trending}
					page={page}
					totalPages={totalPages}
					genre={genre}
					searchQuery={searchQuery}
				/>
			</div>
		</Fragment>
	)
}

export default HomeScreen
