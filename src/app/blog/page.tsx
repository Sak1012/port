import React from "react";
import Link from "next/link";
import Posts from "@/components/Posts";
export default function Developer() {
	return (
		<main className="flex min-h-screen flex-col px-6 py-12 md:px-12 md:py-16 lg:p-24">
			<section className="flex w-full flex-col gap-6 font-mono text-lg md:flex-row md:items-end md:justify-between">
				<section className="flex flex-col">
					<h1 className="font-helvetica text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-9xl">
						sak's blog
					</h1>
				</section>
				<Link href="/" className="text-base underline sm:text-lg">
					go back
				</Link>
			</section>
			<Posts />
		</main>
	);
}
