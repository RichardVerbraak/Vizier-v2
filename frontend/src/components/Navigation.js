import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres } from '../actions/genres'
import { logoutUser } from '../actions/users'

import Search from './Search'

// Either pass down history via HomeScreen => Navigation => Search or bring in Route from react-router-dom and render Search within the route
// in order for it to have access to the history prop
// TODO: Fix logout button still showing logout when there is no user
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
			<Link to='/' className='navbar__logo'>
				Logo
			</Link>

			<Search history={history} />

			<div className='navbar__links'>
				<Link to='/' className='navbar__links--link'>
					Placeholder
				</Link>
				<Link to='/' className='navbar__links--link'>
					Genres
				</Link>
				<Link to='/' className='navbar__links--link'>
					Your List
				</Link>

				{user ? (
					<Link to='/' className='navbar__links--link' onClick={logout}>
						Logout
					</Link>
				) : (
					<Link to='/login' className='navbar__links--link'>
						Sign In
					</Link>
				)}
			</div>

			{!loading && !error && (
				<div>
					{genres.map((genre) => {
						return (
							<Link key={genre.id} to={`/genres/${genre.name}`}>
								{genre.name}
							</Link>
						)
					})}
				</div>
			)}
		</div>
	)
}

export default Navigation
