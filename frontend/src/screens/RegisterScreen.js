import React, { useState } from 'react'

const RegisterScreen = ({ history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()

		// Push user to Home and log him simultaneously
		if (password === confirmPassword) {
			history.push('/')
		}
	}

	return (
		<div>
			<h1>Logo</h1>
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
