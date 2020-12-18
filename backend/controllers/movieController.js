import axios from 'axios'

//	TODO:		Get page from the header
//  @desc       Get 1 page with 20 popular movies
//  @route      GET /api/movies/popular
//  @access     Public
const getMovies = async (req, res) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

//	TODO:		Get movie id from the header
//  @desc       Get 1 page with 20 popular movies
//  @route      GET /api/movies/popular
//  @access     Public
const getRecommendedMovies = async (req, res) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&page=1`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

const getMovieDetails = async (req, res) => {}

export { getMovies, getRecommendedMovies }
