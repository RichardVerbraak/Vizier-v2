import axios from 'axios'
import User from '../models/userModel.js'

// Do something else with the error handling

//  @desc       Get a single page with 20 popular/top rated/upcoming movies
//  @route      GET /api/movies
//  @access     Public
const getMovies = async (req, res, next) => {
	try {
		const page = Number(req.query.page) || 1
		const trending = req.query.trending

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${trending}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Get movies based on genre
//  @route      GET /api/movies/genres/:genre
//  @access     Public
const getMoviesByGenre = async (req, res, next) => {
	try {
		const page = Number(req.query.page) || 1
		const genre = req.params.genre

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Get movies based on search query
//  @route      GET /api/movies/search/:query
//  @access     Public
const getMoviesBySearch = async (req, res, next) => {
	try {
		const page = Number(req.query.page) || 1
		const query = req.params.query

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Get recommended movies based on ID
//  @route      GET /api/movies/:id/recommended
//  @access     Public
const getRecommendedMovies = async (req, res, next) => {
	try {
		const movieID = req.params.id
		const page = Number(req.params.page) || 1

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Get details from a movie
//  @route      GET /api/movies/:id
//  @access     Public
const getMovieDetails = async (req, res, next) => {
	try {
		const movieID = req.params.id

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&append_to_response=videos`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Get cast members from a movie
//  @route      GET /api/movies/cast/:id
//  @access     Public
const getMovieCast = async (req, res, next) => {
	try {
		const id = req.params.id

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.MOVIEDB_API_KEY}`
		)

		if (data) {
			res.send(data)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

// 	Assign user to req?
//  @desc       Get movies from user's Watchlist
//  @route      POST /api/movies/watchlist
//  @access     Private
const getWatchList = async (req, res, next) => {
	try {
		const user = req.body

		const foundUser = await User.findById(user._id)

		if (foundUser) {
			res.status(201)
			res.send(foundUser)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

//  @desc       Add movie to user's Watchlist
//  @route      POST /api/movies/watchlist
//  @access     Private
const addToWatchList = async (req, res, next) => {
	try {
		const user = req.body.user
		const movie = req.body.details

		if (user) {
			const foundUser = await User.findById(user._id)

			foundUser.watchlist.push(movie)

			await foundUser.save()

			res.json({ message: `${movie.title} successfully added to watchlist!` })
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

export {
	getMovies,
	getMoviesByGenre,
	getMoviesBySearch,
	getRecommendedMovies,
	getMovieDetails,
	getMovieCast,
	getWatchList,
	addToWatchList,
}
