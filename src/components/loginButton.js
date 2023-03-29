import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

export default function LoginButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				<Image
					src={session.user.image}
					width='100'
					height='100'
					alt='User Image'
				/>
				{session.user.name} ({session.user.email}) <br />
				<button onClick={() => signOut()}>Sign out</button>
			</>
		)
	}
	return (
		<>
			Not signed in <br />
			<button onClick={() => signIn()}>Sign in</button>
		</>
	)
}
