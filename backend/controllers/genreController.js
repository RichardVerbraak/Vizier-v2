//@desc		Get all genres
//@route	GET api/genres
//@access	Public
const getGenres = async (req, res) => {
	try {
		const { data } = await axios.get(``)

		res.send(data)
	} catch (error) {
		res.status(500)
		res.json({ message: 'Server error' })
	}
}

export { getGenres }
