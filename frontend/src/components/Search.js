import React, { useState } from 'react'

const Search = ({ history }) => {
	const [search, setSearch] = useState('')

	const onSubmitHandler = () => {
		if (search) {
			// history.push('/search/query')
		}
	}

	return (
		<form onSubmit={onSubmitHandler}>
			<input
				type='text'
				name='searchQuery'
				id='searchQuery'
				placeholder='Search movies...'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value)
				}}
			/>
		</form>
	)
}

export default Search
