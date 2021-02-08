//# Explanation why just sending back err gives back an empty object
// https://stackoverflow.com/questions/44402435/why-isnt-my-error-being-returned-in-my-express-response

// The reason Error instances are being shown as empty objects is because the normal properties
// (e.g. .message, .stack, etc.) on an Error object are not set as enumerable and JSON.stringify()
// (used by res.json()) ignores non-enumerable properties.

const errorHandler = (err, req, res, next) => {
	res.status(500)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'development' ? err.stack : null,
	})
}

export default errorHandler
