import React from 'react'
import { MetroSpinner } from 'react-spinners-kit'

const Loader = () => {
	return (
		<div className='loader'>
			<MetroSpinner size={100} color='#d72525' />
		</div>
	)
}

export default Loader
