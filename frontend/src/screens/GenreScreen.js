import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getMoviesByGenre } from '../actions/movies'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Navigation from '../components/Navigation'
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

	const genreList = useSelector((state) => {
		return state.genreList
	})

	const { genres, genreLoading, genreError } = genreList

	useEffect(() => {
		// When genres get loaded into Redux, find the name of that genre that also matches the genre in the URL => return the ID of that one
		// to search by that genre of movies in the backend side (the call to the API needs the ID of the genre to look for them)
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
	}, [dispatch, page, genre, genres])

	return (
		<Fragment>
			<Navigation />
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
