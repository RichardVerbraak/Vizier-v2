import express from 'express'
import {
	getMovieDetails,
	getMovies,
	getMoviesByGenre,
	getRecommendedMovies,
} from '../controllers/movieController.js'

const router = express.Router()

router.get('/', getMovies)
router.get('/genres/:genre', getMoviesByGenre)

router.get('/:id', getMovieDetails)
router.get('/:id/recommended', getRecommendedMovies)

export default router
