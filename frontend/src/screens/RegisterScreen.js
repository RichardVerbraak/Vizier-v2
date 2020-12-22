import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/users'

const RegisterScreen = ({ history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const dispatch = useDispatch()

	const userReducer = useSelector((state) => {
		return state.userInfo
	})

	const { loading, error, user } = userReducer

	useEffect(() => {
		if (user) {
			history.push('/')
		}
	}, [dispatch, history, user])

	const submitHandler = (e) => {
		e.preventDefault()

		// Make alert component
		if (password !== confirmPassword) {
			alert('Passwords do not match')
		} else {
			// Push user to Home and log him simultaneously
			dispatch(registerUser({ name, email, password }))
		}
	}

	return (
		<div>
			<h1>Logo</h1>
			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}
			<form onSubmit={submitHandler}>
				<label>
					Name:
					<input
						type='text'
						placeholder='Enter name'
						value={name}
						onChange={(e) => {
							setName(e.target.value)
						}}
					></input>
				</label>

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

				<label>
					Confirm password:
					<input
						type='password'
						placeholder='Confirm password'
						value={confirmPassword}
						onChange={(e) => {
							setConfirmPassword(e.target.value)
						}}
					></input>
				</label>

				<button type='submit'>Register</button>
			</form>
		</div>
	)
}

export default RegisterScreen
