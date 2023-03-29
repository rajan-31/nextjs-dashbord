import Link from 'next/link'
import LoginButton from './loginButton'

export default function Navbar() {
	return (
		<>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<LoginButton />
				</li>
				<li>
					<Link href='/dashboard'>Dashboard</Link>
				</li>
			</ul>
		</>
	)
}
