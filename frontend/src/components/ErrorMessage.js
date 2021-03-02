import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

const ErrorMessage = ({ error }) => {
	return (
		<div className='error'>
			<p className='error__message'>{error}</p>
			<FontAwesomeIcon className='error__icon' icon={faExclamationCircle} />
		</div>
	)
}

ErrorMessage.propTypes = {
	error: PropTypes.string.isRequired,
}

export default ErrorMessage
