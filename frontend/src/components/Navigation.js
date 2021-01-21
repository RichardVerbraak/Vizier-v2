import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres } from '../actions/genres'
import { logoutUser } from '../actions/users'

import Search from './Search'

// Either pass down history via HomeScreen => Navigation => Search or bring in Route from react-router-dom and render Search within the route
// in order for it to have access to the history prop
// TODO: Fix logout button still showing logout when there is no user
// IDEA: Load genres in HomeScreen and pass down to navigation and show a loader for homepage untill genre fetching is done
const Navigation = ({ history }) => {
	const dispatch = useDispatch()

	const genreList = useSelector((state) => state.genreList)

	const { loading, error, genres } = genreList

	const userLogin = useSelector((state) => state.userLogin)

	const { user, userLoading, userError } = userLogin

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

				<Search history={history} />

				<div className='navbar__links'>
					<Link to='/' className='navbar__links--link'>
						Movies
					</Link>

					<div className='navbar__genres'>
						Genres
						{!loading && !error && (
							<ul className='navbar__dropdown'>
								{genres.map((genre) => {
									return (
										<li className='navbar__dropdown--item'>
											<Link key={genre.id} to={`/genres/${genre.name}`}>
												{genre.name}
											</Link>
										</li>
									)
								})}
							</ul>
						)}
					</div>

					<Link to='/' className='navbar__links--link'>
						Watchlist
					</Link>
				</div>

				{user ? (
					<div>
						<Link
							to='/'
							className='navbar__links--profile btn'
							onClick={logout}
						>
							Logout
						</Link>
						<p>{user.name}</p>
					</div>
				) : (
					<Link to='/login' className='navbar__links--profile btn'>
						Sign In
					</Link>
				)}
			</div>
		</div>
	)
}

export default Navigation
