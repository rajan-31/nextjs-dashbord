import Component from '@/components/loginButton'
import LoginButton from '@/components/loginButton'
import { useRef, useState } from 'react'

export default function Login() {
	// const [username, setUsername] = useState('rajan')
	// const [password, setPassword] = useState('123456')

	// function handleLogin(e) {
	// 	e.preventDefault()

	// 	console.log(username)
	// 	console.log(password)
	// }

	return (
		<>
			<h1>Login Page</h1>
			{/* <form method='post' onSubmit={handleLogin}>
				<input
					type='text'
					placeholder='Username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<input type='submit' value='Login' />
			</form> */}

			<LoginButton />
		</>
	)
}
