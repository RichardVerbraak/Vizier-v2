import express from 'express'
import {
	getMovieCast,
	getMovieDetails,
	getMovies,
	getMoviesByGenre,
	getMoviesBySearch,
	getRecommendedMovies,
	getWatchList,
	addToWatchList,
	deleteFromWatchList,
} from '../controllers/movieController.js'

import { authorizeUser } from '../middleware/authMiddleware.js'

const router = express.Router()

// Not sure if I need to specify :page or :genre and params in general here

router.get('/', getMovies)

router.get('/genres/:genre', getMoviesByGenre)

router.get('/search/:query', getMoviesBySearch)

router.get('/cast/:id', getMovieCast)
router.get('/:id/recommended/:page', getRecommendedMovies)

// Maybe assign user to req.object instead of posting the user data to the server each time in order to fetch his watchlist

router
	.route('/watchlist')
	.get(authorizeUser, getWatchList)
	.post(authorizeUser, addToWatchList)
	.delete(authorizeUser, deleteFromWatchList)

// Needs to be AFTER /watchlist, else it will match the wrong route
router.get('/:id', getMovieDetails)

export default router
