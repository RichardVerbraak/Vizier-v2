import User from '../models/userModel.js'

// Use error middleware?

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
		throw new Error('Server Error')
	}
}

//@desc		Login the user
//@route	POST /api/users
//@access	Public
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body

		const existingUser = User.findOne(email)

		if (!existingUser) {
			res.status(404)
			throw new Error('No user found')
		} else {
			res.json(existingUser.select('-password'))
		}
	} catch (error) {
		res.status(500)
		throw new Error('Server Error')
	}
}

export { registerUser, loginUser }
