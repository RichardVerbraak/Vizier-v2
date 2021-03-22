import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import ErrorMessage from '../components/ErrorMessage'
import Loader from '../components/Loader'

import { loginUser } from '../actions/users'

const LoginScreen = ({ history }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(loginUser({ email, password }))
	}

	const userInfo = useSelector((state) => {
		return state.userInfo
	})

	const { loading, error, user } = userInfo

	useEffect(() => {
		if (user) {
			history.push('/')
		}
	}, [history, dispatch, user])

	return (
		<div className='login'>
			<div className='logo__box'>
				<Link to='/' className='logo logo__login'>
					Vizier
				</Link>
			</div>

			{loading && <Loader />}

			<form className='login__form' onSubmit={submitHandler}>
				{error && <ErrorMessage error={error} />}

				<input
					className='login__form--input'
					type='email'
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
