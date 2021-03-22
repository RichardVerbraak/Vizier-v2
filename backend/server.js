import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import movieRoutes from './routes/movieRoutes.js'
import userRoutes from './routes/userRoutes.js'
import genreRoutes from './routes/genreRoutes.js'

import { errorHandler, notFound } from './middleware/errorMiddleware.js'

const app = express()

dotenv.config()

connectDB()

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// Enables parsing of body
app.use(express.json())

// Routes
app.use('/api/movies', movieRoutes)
app.use('/api/genres', genreRoutes)
app.use('/api/users', userRoutes)

// Resolve without params gives the current directory name
const folder = path.resolve()

// Serve static folder
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(folder, '/frontend/build')))

	// * means any path that isnt any of our API routes
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(folder, 'frontend', 'build', 'index.html'))
	})
} else {
	app.get('/', (req, res) => {
		res.send('API is running...')
	})
}

// Not found route
app.use(notFound)

// Custom Error Handler Middleware
app.use(errorHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(
		`Server running in ${process.env.NODE_ENV} mode and on port: ${PORT}`
	)
})
