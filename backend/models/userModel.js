import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// Add movies to the user (watchlist)

// const movieSchema = mongoose.Schema({
// 	movie: {
// 		type: Object,
// 	},
// })

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
})

//////// !! Moved the compare passwords function into the controller itself currently

// Compare password the user entered in vs the one in DB
// userSchema.methods.comparePassword = async function (enteredPassword) {
// 	return await bcrypt.compare(enteredPassword, this.password)
// }

// Hash password if it's modified else go next
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) {
		next()
	}

	// Salt and Hash
	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(this.password, salt)

	// Set users password to the hashed one
	this.password = hash

	// Move on to saving the data to the DB
	next()
})

const User = mongoose.model('User', userSchema)

export default User
