import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { registerUser } from '../actions/users'
import ErrorMessage from '../components/ErrorMessage'

//TODO: Make it look a bit less bland

const RegisterScreen = ({ history }) => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [errorPassword, setErrorPassword] = useState('')

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

		if (password !== confirmPassword) {
			setErrorPassword('Passwords do not match')
		} else {
			dispatch(registerUser({ name, email, password }))
		}
	}

	return (
		<div className='login'>
			<div className='logo__box'>
				<Link to='/' className='logo logo__login'>
					Vizier
				</Link>
			</div>

			{loading && <h1>Loading...</h1>}

			<form className='login__form' onSubmit={submitHandler}>
				{error && <ErrorMessage error={error} />}
				{errorPassword && <ErrorMessage error={errorPassword} />}
				<input
					className='login__form--input'
					type='text'
					placeholder='Enter name'
					value={name}
					onChange={(e) => {
						setName(e.target.value)
					}}
				></input>

				<input
					className='login__form--input'
					type='email'
					placeholder='Enter email'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				></input>

				<input
					className='login__form--input'
					type='password'
					placeholder='Enter password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				></input>

				<input
					className='login__form--input'
					type='password'
					placeholder='Confirm password'
					value={confirmPassword}
					onChange={(e) => {
						setConfirmPassword(e.target.value)
					}}
				></input>

				<button className='btn login__form--btn' type='submit'>
					Register
				</button>
			</form>
		</div>
	)
}

export default RegisterScreen
