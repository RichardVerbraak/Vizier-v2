import express from 'express'
import {
	getMovieCast,
	getMovieDetails,
	getMovies,
	getMoviesByGenre,
	getMoviesBySearch,
	getRecommendedMovies,
} from '../controllers/movieController.js'

const router = express.Router()

// Not sure if I need to specify :page or :genre and params in general here

router.get('/', getMovies)
router.get('/genres/:genre', getMoviesByGenre)

router.get('/search/:query', getMoviesBySearch)

router.get('/cast/:id', getMovieCast)
router.get('/:id', getMovieDetails)
router.get('/:id/recommended', getRecommendedMovies)

export default router
