//# Explanation why just sending back err gives back an empty object
// https://stackoverflow.com/questions/44402435/why-isnt-my-error-being-returned-in-my-express-response

// The reason Error instances are being shown as empty objects is because the normal properties
// (e.g. .message, .stack, etc.) on an Error object are not set as enumerable and JSON.stringify()
// (used by res.json()) ignores non-enumerable properties.

// Error sometimes gets set to 200 which isnt correct so change it to 500 instead or the statusCode that was sent with the error
export const errorHandler = (err, req, res, next) => {
	const errorStatus = res.statusCode === 200 ? 500 : res.statusCode

	console.log('error fired')

	res.status(errorStatus)

	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'development' ? err.stack : null,
	})
}

// Not sure if it's correct to handle a notFound route like this or if I should be passing the error explicitly into next()
export const notFound = (req, res, next) => {
	res.status(404)
	const error = new Error("Whoops! This page doesn't exist")

	next(error)
}
