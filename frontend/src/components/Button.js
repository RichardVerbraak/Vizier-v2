import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ url, className, text }) => {
	return (
		<Link to={url} className={className}>
			{text}
		</Link>
	)
}

export default Button
