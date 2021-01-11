import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMovies } from '../actions/movies'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Navigation from '../components/Navigation'
import Pagination from '../components/Pagination'

// Notes are in the older project on all the issues I had including links, might compile them in a single file later on

// TODO: Make error and loading component
// TODO: Make seperate components for movies and header (user info + sign in button etc)

const HomeScreen = ({ match, location }) => {
	// Convert from string to number
	const page = Number(match.params.page) || 1

	const trending = match.params.trending

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
	}, [dispatch, page, trending])

	return (
		<Fragment>
			<Navigation />
			<h1>HomeScreen</h1>
			<Header trending={trending} />

			<Link to='/discover/popular'>Popular</Link>
			<Link to='/discover/top_rated'>Top Rated</Link>
			<Link to='/discover/upcoming'>Upcoming</Link>

			<h3>Genres</h3>
			<Link to='/genres/action'>Action</Link>

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

			<Pagination screen={'HomeScreen'} trending={trending} page={page} />
		</Fragment>
	)
}

export default HomeScreen
