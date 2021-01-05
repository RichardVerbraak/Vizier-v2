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
		throw new Error('Invalid or missing data')
	}
}

//@desc		Login the user
//@route	POST /api/users/login
//@access	Public

// TODO: matchpassword to verify
const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body

		const user = await User.findOne({ email })

		if (user) {
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
			})
		}
	} catch (error) {
		res.status(404)
		throw new Error('Invalid email or password')
	}
}

export { registerUser, loginUser }
