import React, { useState } from 'react'
import MediaQuery from 'react-responsive'

const HamburgerMenu = () => {
	const [active, setActive] = useState(false)

	console.log(active)

	return (
		<div className='hamburger__container'>
			<MediaQuery maxDeviceWidth={780}>
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
					<div className='sidebar__links'>
						<p className='sidebar__links--link'>Link 1</p>
						<p className='sidebar__links--link'>Link 2</p>
					</div>
				</div>
			</MediaQuery>
		</div>
	)
}

export default HamburgerMenu
