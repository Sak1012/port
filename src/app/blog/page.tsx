import React from "react";
import Link from "next/link";
import Posts from "@/components/Posts";
export default function Developer() {
	return (
		<main className="flex min-h-screen flex-col p-24">
			<section className="w-full flex flex-row justify-between font-mono text-lg ">
				<section className="flex flex-col">
					<h1 className="text-9xl font-helvetica ">sak's blog</h1>
				</section>
				<Link href="/" className="underline">
					go back
				</Link>
			</section>
			<Posts />
		</main>
	);
}
