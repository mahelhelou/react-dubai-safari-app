import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './Forms.css'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const formSubmitHandler = event => {
		event.preventDefault()

		if (email.trim() === '') {
			return toast.error('Email is required')
		}

		if (password.trim() === '') {
			return toast.error('Password is required')
		}
	}

	return (
		<div className='form-wrapper'>
			<ToastContainer theme='colored' />
			<form onSubmit={formSubmitHandler} className='form'>
				<input onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Email' />
				<input onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Password' />
				<button className='form-btn'>Login</button>
			</form>
		</div>
	)
}

export default Login
