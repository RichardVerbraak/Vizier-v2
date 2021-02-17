import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Search from './Search'

import { getGenres } from '../actions/genres'
import { logoutUser } from '../actions/users'

// TODO: Better naming or HTML for the Genre dropdown link

const Navigation = () => {
	const dispatch = useDispatch()

	const genreList = useSelector((state) => state.genreList)

	const { loading, error, genres } = genreList

	const userInfo = useSelector((state) => state.userInfo)

	const { user, userLoading, userError } = userInfo

	const logout = () => {
		dispatch(logoutUser())
	}

	useEffect(() => {
		dispatch(getGenres())
	}, [dispatch, user])

	return (
		<div className='navbar'>
			<div className='navbar__container'>
				<Link to='/' className='logo logo__navbar'>
					Vizier
				</Link>

				<Search />

				<div className='navbar__links'>
					<div className='navbar__links--box'>
						<span className='navbar__links--title'>Movies</span>
						<ul className='navbar__dropdown'>
							<Link className='navbar__dropdown--item' to='/discover/popular'>
								Popular
							</Link>
							<Link className='navbar__dropdown--item' to='/discover/top_rated'>
								Top Rated
							</Link>
							<Link className='navbar__dropdown--item' to='/discover/upcoming'>
								Upcoming
							</Link>
						</ul>
					</div>

					<div className='navbar__links--box'>
						<span className='navbar__links--title'>Genres</span>
						{!loading && !error && (
							<ul className='navbar__dropdown'>
								{genres.map((genre) => {
									return (
										<Link
											className='navbar__dropdown--item'
											key={genre.id}
											to={`/genres/${genre.name}`}
										>
											{genre.name}
										</Link>
									)
								})}
							</ul>
						)}
					</div>

					<Link to='/watchlist' className='navbar__links--box'>
						<span className='navbar__links--title'>Watchlist</span>
					</Link>
				</div>

				{user ? (
					<Link to='/' className='navbar__links--profile btn' onClick={logout}>
						<FontAwesomeIcon className='profile__icon' icon={faUser} />
						<p>Logout</p>
					</Link>
				) : (
					<Link to='/login' className='navbar__links--profile btn'>
						<FontAwesomeIcon className='profile__icon' icon={faUser} />
						<p>Sign In</p>
					</Link>
				)}
			</div>
		</div>
	)
}

// Instead of 'Logout'
// <p className='profile__name'>{user.name.split(' ')[0]} </p>

export default Navigation
