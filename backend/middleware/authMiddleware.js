import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

export const authorizeUser = async (req, res, next) => {
	try {
		const token = req.headers.authorization

		if (!token) {
			res.status(401)
			throw new Error('Authorization failed, no token')
		} else {
			const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

			const user = await User.findById(decodedToken.id).select('-password')

			if (user) {
				req.user = user
				next()
			} else {
				res.status(401)
				throw new Error('Authorization failed, invalid token')
			}
		}
	} catch (error) {
		next(error)
	}
}
