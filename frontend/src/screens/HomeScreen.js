import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../actions/movies'

// Notes are in the older project on all the issues I had including links, might compile them in a single file later on

// TODO: Make error and loading component

const HomeScreen = () => {
	const dispatch = useDispatch()

	const movieList = useSelector((state) => {
		return state.movieList
	})

	const { movies, loading, error } = movieList

	useEffect(() => {
		dispatch(getMovies())
	}, [dispatch])

	return (
		<Fragment>
			<h1>HomeScreen</h1>
			<p>Movies</p>
			{loading ? (
				<h1>Loading...</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				<div>
					{movies.map((movie) => {
						return <p key={movie.id}>{movie.original_title}</p>
					})}
				</div>
			)}
		</Fragment>
	)
}

export default HomeScreen
