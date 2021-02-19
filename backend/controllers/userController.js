import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// @desc        Register the user
// @route       POST /api/users
// @access      Public
const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body

		const userExists = await User.findOne({ email })

		if (userExists) {
			res.status(400)
			throw new Error('Email already taken')
		}

		const user = await User.create({
			name,
			email,
			password,
		})

		if (user) {
			res.status(201)
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
				token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
					expiresIn: '30d',
				}),
			})
		} else {
			res.status(400)
			throw new Error('Invalid or missing data')
		}
	} catch (error) {
		next(error)
	}
}

//@desc		Login the user
//@route	POST /api/users/login
//@access	Public
const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (!user) {
			res.status(400)
			throw new Error('Invalid data')
		}

		const matchPassword = await bcrypt.compare(password, user.password)

		// If user exists AND passwords are a match => return id, name and email to be used in header component
		// Also return a token to verify if its the same user on any route
		if (user && matchPassword) {
			res.status(201)
			res.json({
				_id: user.id,
				email: user.email,
				name: user.name,
				token: jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
					expiresIn: '30d',
				}),
			})
		} else {
			res.status(401)
			throw new Error('Invalid data')
		}
	} catch (error) {
		next(error)
	}
}

export { registerUser, loginUser }
