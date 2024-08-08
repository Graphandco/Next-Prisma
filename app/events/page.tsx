import prisma from "../lib/db";
import EventCard from "./EventCard";
import AddEvent from "./AddEvent";

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

	// console.log(events);

	const eventsCount = await prisma.event.count();

	return (
		<div className="m-5">
			<h1 className="text-3xl">Tous les événements ({eventsCount})</h1>
			<div className="flex gap-5 mt-5">
				{events.map((event) => (
					<EventCard key={event.id} event={event} />
				))}
			</div>
			<div className="mt-12">
				<AddEvent />
			</div>
		</div>
	);
}
