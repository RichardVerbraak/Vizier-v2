import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Search = () => {
	const dispatch = useDispatch()

	const [search, setSearch] = useState('')

	useEffect(() => {
		if (search) {
			// dispatch(searchMovie(search))
		}
	}, [dispatch, search])

	return (
		<div>
			<input
				type='text'
				name=''
				id=''
				value={search}
				onChange={(e) => {
					setSearch(e.target.value)
				}}
			/>
		</div>
	)
}

export default Search
