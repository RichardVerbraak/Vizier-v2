import axios from 'axios'

// Do something else with the error handling

//  @desc       Get a single page with 20 popular/top rated/upcoming movies
//  @route      GET /api/movies
//  @access     Public
const getMovies = async (req, res) => {
	try {
		const page = Number(req.query.page) || 1
		const trending = req.query.trending

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${trending}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get movies based on genre
//  @route      GET /api/movies/genres/:genre
//  @access     Public
const getMoviesByGenre = async (req, res) => {
	try {
		const page = Number(req.query.page) || 1
		const genre = req.params.genre

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get movies based on search query
//  @route      GET /api/movies/search/:query
//  @access     Public
const getMoviesBySearch = async (req, res) => {
	try {
		const page = Number(req.query.page) || 1
		const query = req.params.query

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get recommended movies based on ID
//  @route      GET /api/movies/:id/recommended
//  @access     Public
const getRecommendedMovies = async (req, res) => {
	try {
		const movieID = req.params.id
		const page = Number(req.params.page) || 1

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=${page}`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get details from a movie
//  @route      GET /api/movies/:id
//  @access     Public
const getMovieDetails = async (req, res) => {
	try {
		const movieID = req.params.id

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get cast members from a movie
//  @route      GET /api/movies/cast/:id
//  @access     Public
const getMovieCast = async (req, res) => {
	try {
		const id = req.params.id

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.MOVIEDB_API_KEY}`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

export {
	getMovies,
	getMoviesByGenre,
	getMoviesBySearch,
	getRecommendedMovies,
	getMovieDetails,
	getMovieCast,
}
