import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { loginUser } from '../actions/users'

const LoginScreen = ({ history }) => {
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

	// Redirect to home if logged in
	useEffect(() => {
		if (user) {
			history.push('/')
		}
	}, [history, dispatch, user])

	return (
		<div className='login'>
			<div className='logo__box'>
				<div className='logo logo-login'>Vizier</div>
			</div>

			{loading && <h1>Loading...</h1>}
			{error && <h1>{error}</h1>}

			<form className='login__form' onSubmit={submitHandler}>
				<input
					className='login__form--input'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => {
						setEmail(e.target.value)
					}}
				></input>

				<input
					className='login__form--input'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value)
					}}
				></input>

				<button className='btn login__form--btn' type='submit'>
					Login
				</button>
			</form>

			<p className='login__text'>
				Don't have an account yet?{' '}
				<Link className='login__text--signup' to='/register'>
					Sign up here
				</Link>
			</p>
		</div>
	)
}

export default LoginScreen
