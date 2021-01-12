import axios from 'axios'

//@desc		Get all genres
//@route	GET api/genres
//@access	Public
const getGenres = async (req, res) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US`
		)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

export { getGenres }
