import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getGenres } from '../actions/genres'

// TODO: Make genres a hover button with links to other genres
// 1. Fetch the genres from MovieDB API and map over them outputting a <Link> with a value of to=/genres/${genre.id} and <Link>{genre.name}<Link/>
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
			<h3>Search component</h3>

			<div className='navbar__links'>
				<Link className='navbar__links--link'>Placeholder</Link>
				<Link className='navbar__links--link'>Genres</Link>
				<Link className='navbar__links--link'>Your List</Link>
				<Link to='/login' className='navbar__links--link'>
					Sign In
				</Link>
			</div>

			{!loading && (
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
