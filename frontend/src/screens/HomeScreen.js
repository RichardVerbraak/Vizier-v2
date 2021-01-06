import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMovies } from '../actions/movies'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

// Notes are in the older project on all the issues I had including links, might compile them in a single file later on

// TODO: Make error and loading component
// TODO: Make seperate components for movies and header (user info + sign in button etc)

const HomeScreen = ({ match, location }) => {
	// Didnt get converted to number at first
	const page = Number(match.params.page) || 1

	// Removes first slash from match.path i.e /top_rated
	const trending = match.path.substring(1)

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
		dispatch(getMovies(page, trending))
	}, [dispatch, page])

	return (
		<Fragment>
			<h1>HomeScreen</h1>
			<h2>Movies</h2>

			<Link to='/top_rated'>Top Rated</Link>
			<Link to='/upcoming'>Upcoming</Link>

			{user && <p>{user.name}</p>}

			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				<div>
					<Movies movies={movies} />
				</div>
			)}

			<Pagination page={page} />
		</Fragment>
	)
}

export default HomeScreen
