import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginUser } from '../actions/users'

const LoginScreen = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(loginUser({ email, password }))
	}

	const userLogin = useSelector((state) => {
		return state.userLogin
	})

	const { loading, error, user } = userLogin

	return (
		<div>
			<h1>Logo</h1>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<form onSubmit={submitHandler}>
				<label>
					Email:
					<input
						type='text'
						placeholder='Enter email'
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					></input>
				</label>

				<label>
					Password:
					<input
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					></input>
				</label>

				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default LoginScreen
