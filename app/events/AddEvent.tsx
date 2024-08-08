"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	// FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createEvent } from "@/actions/actions";

const FormSchema = z.object({
	title: z.string().min(2, {
		message: "title must be at least 2 characters.",
	}),
	content: z.string().min(2, {
		message: "content must be at least 2 characters.",
	}),
});

export default function AddEvent() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			title: "",
			content: "",
		},
	});

	// function onSubmit(data: z.infer<typeof FormSchema>) {
	// 	toast({
	// 		title: "Vous avez soumis ces données:",
	// 		description: (
	// 			<pre className="mt-2 w-[340px] rounded-md p-4">
	// 				<code className="text-white">
	// 					{JSON.stringify(data, null, 2)}
	// 				</code>
	// 			</pre>
	// 		),
	// 	});
	// }

	return (
		<Form {...form}>
			<form
				action={createEvent}
				// onSubmit={form.handleSubmit(onSubmit)}
				className="w-72 mx-auto space-y-6"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nom de l'événement</FormLabel>
							<FormControl>
								<Input
									placeholder="Saisissez un titre"
									{...field}
								/>
							</FormControl>
							{/* <FormDescription>
								This is your public display name.
							</FormDescription> */}
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="content"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Contenu de l'événement</FormLabel>
							<FormControl>
								<Input
									placeholder="Saisissez un texte"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Créer</Button>
			</form>
		</Form>
	);
}
