import Link from 'next/link'

export default function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>

			<h3>Available Charts</h3>
			<ol>
				<li>
					<Link href='/dashboard/bar_chart'>Bar Chart</Link>
				</li>
				<li>
					<Link href='/dashboard/pie_chart'>Pie Chart</Link>
				</li>
			</ol>
		</>
	)
}
