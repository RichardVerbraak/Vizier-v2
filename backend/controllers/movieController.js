import axios from 'axios'
import e from 'express'
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

//  @desc       Get movies from user's Watchlist
//  @route      GET /api/movies/watchlist
//  @access     Private
const getWatchList = async (req, res, next) => {
	try {
		const foundUser = await User.findById(req.user.id)

		if (foundUser) {
			res.status(201)
			res.json(foundUser.watchlist)
		} else {
			res.status(500)
			throw new Error('Server Error')
		}
	} catch (error) {
		next(error)
	}
}

// Return the newly added movie as response?
//  @desc       Add movie to user's Watchlist
//  @route      POST /api/movies/watchlist
//  @access     Private
const addToWatchList = async (req, res, next) => {
	try {
		const newMovie = req.body

		if (req.user) {
			const foundUser = await User.findById(req.user._id)

			const alreadyExists = foundUser.watchlist.find((movie) => {
				return movie.id === newMovie.id
			})

			if (!alreadyExists) {
				foundUser.watchlist.push(newMovie)

				await foundUser.save()

				res.status(201)
				res.json({ message: `${newMovie.title} added successfully` })
			} else {
				res.status(400)
				throw new Error('Movie already added to Watchlist')
			}
		} else {
			res.status(500)
			throw new Error('Please sign in to add movies to your watchlist')
		}
	} catch (error) {
		next(error)
	}
}

// TODO: Improve error handling?
//  @desc       Delete movie from user's Watchlist
//  @route      DELETE /api/movies/watchlist
//  @access     Private
const deleteFromWatchList = async (req, res, next) => {
	try {
		const movieID = Number(req.params.id)

		if (movieID) {
			await User.updateOne(
				{ _id: req.user._id },
				{ $pull: { watchlist: { id: movieID } } },
				(error, data) => {
					if (error) {
						res.status(500)
						throw new Error('Server error')
					} else {
						res.status(201)
						res.json({ message: 'Successfully removed' })
					}
				}
			)
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
	deleteFromWatchList,
}
