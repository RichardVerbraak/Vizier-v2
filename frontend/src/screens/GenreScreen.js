import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMoviesByGenre } from '../actions/movies'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

const GenreScreen = ({ match, location }) => {
	// Convert from string to number
	const page = Number(match.params.page) || 1

	console.log(match.params.genre)

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
		dispatch(getMoviesByGenre())
	}, [dispatch, page])

	return (
		<Fragment>
			<h1>GenreScreen</h1>
			<h2>Movies</h2>

			<h3>Genres</h3>

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

export default GenreScreen
