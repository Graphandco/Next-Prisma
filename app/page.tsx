import Link from "next/link";

export default function Home() {
	return (
		<div className="m-1">
			<Link href="/events">Voir tous les événements</Link>
		</div>
	);
}
