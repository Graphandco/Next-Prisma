import prisma from "@/app/lib/db";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function EventPage({
	params,
}: {
	params: { slug: string };
}) {
	const event = await prisma.event.findUnique({
		where: {
			// id: params.id,
			slug: params.slug,
		},
	});
	return (
		<div className="m-3">
			<h1>{event?.title}</h1>
			<p>{event?.content}</p>
			<Link href="/events">
				<Button>Retour</Button>
			</Link>
		</div>
	);
}
