import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'

const HamburgerMenu = ({ loading, error, genres, user, logout }) => {
	const [active, setActive] = useState(false)

	return (
		<MediaQuery maxDeviceWidth={780}>
			<div className='hamburger__container'>
				<div
					className={`hamburger ${active ? 'hamburger__active' : 'not-active'}`}
					onClick={() => {
						setActive(!active)
					}}
				>
					<span className='hamburger__line'></span>
					<span className='hamburger__line'></span>
					<span className='hamburger__line'></span>
				</div>

				<div
					className={`sidebar ${
						active ? 'sidebar__active' : 'sidebar__not-active'
					}`}
				>
					<div className='sidebar__container'>
						<div className='sidebar__trending'>
							<h3 className='sidebar__heading'>Trending</h3>
							<ul className='sidebar__links'>
								<Link className='sidebar__links--link' to='/discover/popular'>
									Popular
								</Link>
								<Link className='sidebar__links--link' to='/discover/top_rated'>
									Top Rated
								</Link>
								<Link className='sidebar__links--link' to='/discover/upcoming'>
									Upcoming
								</Link>
							</ul>
						</div>

						<div className='sidebar__genres'>
							<h3 className='sidebar__heading'>Genres</h3>
							{!loading && !error && (
								<ul className='sidebar__links'>
									{genres.map((genre) => {
										return (
											<Link
												className='sidebar__links--link'
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

						<div className='sidebar__profile'>
							<h3 className='sidebar__heading'>Profile</h3>
							<ul className='sidebar__links'>
								<Link to='/watchlist' className='sidebar__links--link'>
									<span className='navbar__links--title'>Watchlist</span>
								</Link>

								{user ? (
									<Link
										to='/'
										className='sidebar__links--link'
										onClick={logout}
									>
										<p>Logout</p>
									</Link>
								) : (
									<Link to='/login' className='sidebar__links--link'>
										<p>Sign In</p>
									</Link>
								)}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</MediaQuery>
	)
}

export default HamburgerMenu
