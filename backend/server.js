import express from 'express'
import movies from './routes/movies.js'

const app = express()
const port = 3000

app.use('/', movies)

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
