import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getMovies, getMoviesBySearch } from '../actions/movies'
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

	const dispatch = useDispatch()

	const movieList = useSelector((state) => {
		return state.movieList
	})

	const { movies, loading, error } = movieList

	const userLogin = useSelector((state) => {
		return state.userLogin
	})

	const { user, userLoading, userError } = userLogin

	useEffect(() => {
		if (searchQuery) {
			dispatch(getMoviesBySearch(searchQuery, page))
		}

		if (trending) {
			dispatch(getMovies(page, trending))
		}
	}, [dispatch, page, trending, searchQuery])

	return (
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				<Header trending={trending} />

				{user && <p>{user.name}</p>}

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
					screen={'HomeScreen'}
					trending={trending}
					page={page}
					searchQuery={searchQuery}
				/>
			</div>
		</Fragment>
	)
}

export default HomeScreen
