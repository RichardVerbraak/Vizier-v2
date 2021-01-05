import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../actions/movies'
import Movies from '../components/Movies'

// Notes are in the older project on all the issues I had including links, might compile them in a single file later on

// TODO: Make error and loading component
// TODO: Make seperate components for movies and header (user info + sign in button etc)

const HomeScreen = () => {
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
		dispatch(getMovies())
	}, [dispatch])

	return (
		<Fragment>
			<h1>HomeScreen</h1>
			<h2>Movies</h2>

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

			<button>Page 1</button>
			<button>Page 2</button>
		</Fragment>
	)
}

export default HomeScreen
