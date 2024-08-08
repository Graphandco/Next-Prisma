import prisma from "../lib/db";

export default async function Home() {
	const events = await prisma.event.findMany();
	return (
		<div className="m-3">
			<h1>Events Page</h1>
			<ul>
				{events.map((event) => (
					<li key={event.id}>
						<div className="font-bold">{event.title}</div>
						<p>{event.content}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
