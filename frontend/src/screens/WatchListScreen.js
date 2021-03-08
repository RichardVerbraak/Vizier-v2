import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Pagination from '../components/Pagination'

import { getWatchList } from '../actions/movies'
import ErrorMessage from '../components/ErrorMessage'

// TODO: Add in pages to the backend so pagination can be added in
// TODO: Add other error message? (Bigger ones for when there arent any movies or user goes to a route that doesnt exist)

//! Not sure why I have to check watchlist before passing it down to movies here and not in other components for it to work

const WatchListScreen = ({ history, location }) => {
	const dispatch = useDispatch()
	const page = location.search ? Number(location.search.split('=')[1]) : 1

	const movieWatchList = useSelector((state) => {
		return state.movieWatchList
	})
	const { watchlist, totalPagesWatchList, loading, error } = movieWatchList

	const userInfo = useSelector((state) => {
		return state.userInfo
	})
	const { user } = userInfo

	useEffect(() => {
		if (user) {
			dispatch(getWatchList(page))
		}
	}, [dispatch, user, page])

	return (
		<Fragment>
			<Navigation history={history} />
			<div className='container'>
				<Header title={'Watchlist'} />

				{!user && <ErrorMessage error={'Please sign in to save movies'} />}

				{loading ? (
					<Loader />
				) : error ? (
					<ErrorMessage error={error} />
				) : (
					<div>
						<Movies movies={watchlist} />
						<Pagination totalPagesWatchList={totalPagesWatchList} page={page} />
					</div>
				)}
			</div>
		</Fragment>
	)
}

export default WatchListScreen
