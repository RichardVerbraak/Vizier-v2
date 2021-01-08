import axios from 'axios'

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
			`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genre}`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//  @desc       Get recommended movies based on ID
//  @route      GET /api/movies/:id/recommended (?)
//  @access     Public
const getRecommendedMovies = async (req, res) => {
	try {
		const movieID = req.params.id

		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieID}/recommendations?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`
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

export { getMovies, getMoviesByGenre, getRecommendedMovies, getMovieDetails }
