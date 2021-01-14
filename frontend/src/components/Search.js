import React, { useState } from 'react'

const Search = ({ history }) => {
	const [search, setSearch] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		console.log(e.target.value)

		if (search) {
			history.push(`/search/${search}`)
		} else {
			history.push('/')
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
			<button type='submit'>Search</button>
		</form>
	)
}

export default Search
