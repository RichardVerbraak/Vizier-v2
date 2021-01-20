import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

// Use error middleware?

//TODO: Fix error handling

// @desc        Register the user
// @route       POST /api/users
// @access      Public
const registerUser = async (req, res) => {
	try {
		const { name, email, password } = req.body

		const userExists = await User.findOne({ email })

		if (userExists) {
			res.status(400)
			throw new Error('User already exists')
		}

		if (name && email && password) {
			const user = await User.create({
				name,
				email,
				password,
			})

			res.json({ name, email })
		}
	} catch (error) {
		res.status(500)
		throw new Error('Invalid or missing data')
	}
}

//@desc		Login the user
//@route	POST /api/users/login
//@access	Public
const loginUser = async (req, res) => {
	try {
		// Destructure data from body
		const { email, password } = req.body

		// Find user by mail in DB
		const user = await User.findOne({ email })

		const matchPassword = await bcrypt.compare(password, user.password)

		// If user exists AND passwords are a match => return id, name and email to be used in header component
		if (user && matchPassword) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
			})
		} else {
			// Move on to catch block below, not sure how to handle this more cleanly
			throw new Error('Invalid email or password')
		}
	} catch (error) {
		res.status(404).json({ error: error })
	}
}

export { registerUser, loginUser }
