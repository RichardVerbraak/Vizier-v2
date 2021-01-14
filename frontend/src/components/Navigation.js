import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres } from '../actions/genres'

import Search from './Search'

const Navigation = () => {
	const dispatch = useDispatch()

	const genreList = useSelector((state) => state.genreList)

	const { loading, error, genres } = genreList

	useEffect(() => {
		dispatch(getGenres())
	}, [dispatch])

	return (
		<div className='navbar'>
			<Link to='/' className='navbar__logo'>
				Logo
			</Link>
			<Search />

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
				<Link to='/login' className='navbar__links--link'>
					Sign In
				</Link>
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
