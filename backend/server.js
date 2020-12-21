import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import movies from './routes/movies.js'

import User from './models/userModel.js'

// Only use env variables when in development (set env variables directly on the host later like Heroku env vars)
// Env variables were undefined when running node server.js in backend folder but not when I ran my npm start script?
if (process.env.NODE_ENV !== 'production') {
	dotenv.config()
}

connectDB()

const user = await User.create({
	name: 'Richard Verbraak',
	email: 'richard@example.com',
	password: 'billybob',
})
console.log(user)

const app = express()

const PORT = process.env.PORT || 3000

app.use('/api/movies', movies)

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode and on port: ${PORT}`
	)
})
