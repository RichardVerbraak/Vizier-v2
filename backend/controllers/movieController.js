import axios from 'axios'

//  @desc       Get 20 popular movies from MovieDB API
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

export { getMovies }
