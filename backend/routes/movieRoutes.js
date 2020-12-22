import express from 'express'
import {
	getMovieDetails,
	getMovies,
	getRecommendedMovies,
} from '../controllers/movieController.js'

const router = express.Router()

router.get('/popular', getMovies)
router.get('/:id', getMovieDetails)
router.get('/:id/recommended', getRecommendedMovies)

export default router
