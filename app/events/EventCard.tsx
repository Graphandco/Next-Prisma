import Link from "next/link";
import prisma from "../lib/db";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default async function EventCard({ event }) {
	const author = await prisma.user.findUnique({
		where: {
			// id: params.id,
			id: event.authorID,
		},
	});

	return (
		<Card>
			<CardHeader>
				<CardTitle>{event.title}</CardTitle>
				<CardDescription>{author?.name}</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{event.content}</p>
			</CardContent>
			<CardFooter>
				<Link href={`/events/${event.slug}`}>
					<Button variant="outline">Voir</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
