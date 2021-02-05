import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

// Use error middleware?

//TODO: Fix error handling

// TODO: FIX REGISTER USER

// @desc        Register the user
// @route       POST /api/users
// @access      Public
const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body

		const userExists = await User.findOne({ email })

		if (userExists) {
			res.status(400)
			throw new Error('User already exists')
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

		const matchPassword = await bcrypt.compare(password, user.password)

		// If user exists AND passwords are a match => return id, name and email to be used in header component
		if (user && matchPassword) {
			res.status(201)
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
			})
		} else {
			res.status(400)
			throw new Error('Invalid email or password')
		}
	} catch (error) {
		next(error)
	}
}

export { registerUser, loginUser }
