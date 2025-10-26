import React from "react";
import Link from "next/link";

export default function Developer() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center px-8 py-16 text-center md:px-16 md:py-20 lg:p-24">
			<div className="z-10 flex w-full max-w-3xl flex-col items-center gap-4 font-mono text-base sm:text-lg">
				<p>This page is under construction 🛠️</p>
				<Link className="text-blue-900 underline-offset-4 hover:underline" href="/">
					Back to home
				</Link>
			</div>
		</main>
	);
}
