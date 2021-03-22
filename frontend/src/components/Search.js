import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = ({ history }) => {
	const [search, setSearch] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (search) {
			history.push(`/search/${search}`)
			setSearch('')
		} else {
			history.push('/')
		}
	}

	return (
		<form onSubmit={onSubmitHandler} className='search'>
			<input
				className='search__input'
				type='text'
				name='searchQuery'
				id='searchQuery'
				placeholder='Search movies...'
				value={search}
				onChange={(e) => {
					setSearch(e.target.value)
				}}
			/>
			<button type='submit' className='search__submit'>
				<FontAwesomeIcon className='search__icon' icon={faSearch} />
			</button>
		</form>
	)
}

export default Search
