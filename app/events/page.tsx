import Link from "next/link";
import prisma from "../lib/db";

export default async function EventsPage() {
	const events = await prisma.event.findMany({
		where: {
			published: true,
			title: {
				// contains: "Titre",
				// endsWith: "2"
			},
		},
		orderBy: {
			createdAt: "asc",
		},
		// select: {
		// 	id: true,
		// 	title: true,
		// 	slug: true,
		// },
		// take: 2,
		// skip: 1,
	});

	const eventsCount = await prisma.event.count();

	return (
		<div className="m-3">
			<h1 className="text-3xl">Tous les événements ({eventsCount})</h1>
			<ul>
				{events.map((event) => (
					<li key={event.id}>
						<div className="font-bold">{event.title}</div>
						<p>{event.content}</p>
						<Link href={`/events/${event.slug}`}>Voir</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
