"use server";

import prisma from "@/app/lib/db";

export async function createEvent(formData: FormData) {
	await prisma.event.create({
		data: {
			title: formData.get("title") as string,
			slug: (formData.get("title") as string)
				.replace(/\s+/g, "_")
				.toLowerCase(),
			content: formData.get("content") as string,
			author: {
				connect: {
					email: "test@graphandco.com",
				},
			},
		},
	});
}
