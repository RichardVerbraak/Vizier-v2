import React, { useState } from 'react'
import MediaQuery from 'react-responsive'

const HamburgerMenu = () => {
	const [active, setActive] = useState(false)

	console.log(active)

	return (
		<div className='hamburger__container'>
			<MediaQuery maxDeviceWidth={780}>
				<div
					className={`hamburger ${active ? 'active' : 'not-active'}`}
					onClick={() => {
						setActive(!active)
					}}
				>
					<span className='hamburger__line'></span>
					<span className='hamburger__line'></span>
					<span className='hamburger__line'></span>
				</div>
			</MediaQuery>
		</div>
	)
}

export default HamburgerMenu
