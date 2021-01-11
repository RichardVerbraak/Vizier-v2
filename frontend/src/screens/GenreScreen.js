import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMoviesByGenre } from '../actions/movies'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

const GenreScreen = ({ match }) => {
	// Convert from string to number
	const page = Number(match.params.page) || 1

	const genre = match.params.genre

	const dispatch = useDispatch()

	const movieGenre = useSelector((state) => {
		return state.movieGenre
	})

	const { movies, loading, error } = movieGenre

	const userLogin = useSelector((state) => {
		return state.userLogin
	})

	const { user, userLoading, userError } = userLogin

	useEffect(() => {
		dispatch(getMoviesByGenre(page))
	}, [dispatch, page])

	return (
		<Fragment>
			<h1>GenreScreen</h1>
			<Header genre={genre} />

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

			<Pagination screen={'GenreScreen'} genre={genre} page={page} />
		</Fragment>
	)
}

export default GenreScreen
