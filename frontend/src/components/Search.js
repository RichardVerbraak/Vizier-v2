import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

//## Article on withRouter https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12
// Used withRouter in order to give the history prop to Search component which is rendered inside Navigation
// Because Navigation is now rendered on every page via React-Router instead of every screen--
// which also passed down the history prop- search lost access to history
const Search = ({ history }) => {
	const [search, setSearch] = useState('')

	const onSubmitHandler = (e) => {
		e.preventDefault()

		if (search) {
			history.push(`/search/${search}`)
			setSearch('')
		} else {
			// Message that search doesnt have any input
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
