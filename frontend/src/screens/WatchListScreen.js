import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import { getWatchList } from '../actions/movies'

// TODO: Add in 'empty boxes' for watchlist page
// TODO: Add in pages to the backend so pagination can be added in

const WatchListScreen = ({ match, history }) => {
	const page = Number(match.params.page) || 1

	const dispatch = useDispatch()

	const movieWatchList = useSelector((state) => {
		return state.movieWatchList
	})
	const { watchlist, loading, error } = movieWatchList

	const userInfo = useSelector((state) => {
		return state.userInfo
	})
	const { user, userLoading, userError } = userInfo

	useEffect(() => {
		if (user) {
			dispatch(getWatchList())
		}

		if (watchlist) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
		//eslint-disable-next-line
	}, [dispatch, history, user, success])

	return (
		<Fragment>
			<div className='container'>
				<Header trending={'Watchlist'} />

				{loading ? (
					<Loader />
				) : error ? (
					<h1>{error}</h1>
				) : (
					<div>
						<Movies movies={watchlist} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default WatchListScreen
