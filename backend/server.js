import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import genreRoutes from './routes/genreRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

// Only use env variables when in development (set env variables directly on the host later like Heroku env vars)
// Env variables were undefined when running node server.js in backend folder but not when I ran my npm start script?
if (process.env.NODE_ENV !== 'production') {
	dotenv.config()
}

connectDB()

// const user = await User.create({
// 	name: 'Richard Verbraak',
// 	email: 'richard@example.com',
// 	password: 'billybob',
// })

// const isMatch = async () => {
// 	const user = await User.findOne({ name: 'Richard Verbraak' })
// 	console.log(user)

// 	const isMatch = await user.comparePassword('billybob')
// 	console.log(isMatch)
// }

// isMatch()

const app = express()

const PORT = process.env.PORT || 3000

// Enables parsing of body
app.use(express.json())

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('dev'))
}

app.use('/api/movies', movieRoutes)
app.use('/api/genres', genreRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode and on port: ${PORT}`
	)
})
