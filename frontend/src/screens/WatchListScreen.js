import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import { getWatchList } from '../actions/movies'
import ErrorMessage from '../components/ErrorMessage'

// TODO: Add in pages to the backend so pagination can be added in
// TODO: Add other error message? (Bigger ones for when there arent any movies or user goes to a route that doesnt exist)

//! Not sure why I have to check watchlist before passing it down to movies here and not in other components for it to work

const WatchListScreen = () => {
	const dispatch = useDispatch()

	const watchList = useSelector((state) => {
		return state.movieWatchList
	})
	const { watchlist, loading, error } = watchList

	const userInfo = useSelector((state) => {
		return state.userInfo
	})
	const { user, userLoading, userError } = userInfo

	useEffect(() => {
		if (user) {
			dispatch(getWatchList())
		}
	}, [user])

	return (
		<Fragment>
			<div className='container'>
				<Header title={'Watchlist'} />

				{!user && <ErrorMessage error={'Please sign in to save movies'} />}

				{loading ? (
					<Loader />
				) : error ? (
					<ErrorMessage error={error} />
				) : (
					<div className='movies'>
						{watchlist.map((movie) => {
							return (
								<div key={movie.id} className='movies__item'>
									<Link to={`/movie/${movie.id}`}>
										<img
											key={movie.id}
											src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
											className='movies__item-img'
											alt={`A poster of ${movie.title}`}
										></img>
									</Link>
								</div>
							)
						})}
						{Array(20 - watchlist.length).fill(
							<div className='movies__empty'></div>
						)}
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default WatchListScreen
