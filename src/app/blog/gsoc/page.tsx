import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col px-6 py-12 md:px-12 md:py-16 lg:p-24">
			<section className="flex w-full flex-col gap-6 font-mono text-lg md:flex-row md:items-end md:justify-between">
				<section className="flex flex-col">
					<h1 className="font-helvetica text-4xl leading-tight sm:text-6xl md:text-7xl lg:text-9xl">
						gsoc
					</h1>
				</section>
				<Link href="/blog" className="text-base underline sm:text-lg">
					go back
				</Link>
			</section>

			<section className="mt-8 flex w-full flex-col gap-4">
				<Link
					href="/blog/gsoc/24"
					className="group block rounded-2xl border border-black p-5 transition-colors hover:bg-grey/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-black sm:p-8"
				>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div className="flex w-full flex-col gap-2 font-helvetica sm:w-3/4">
							<h2 className="text-xl font-helvetica sm:text-2xl">GSoC 2024</h2>
							<p className="text-sm font-helvetica leading-relaxed sm:text-base">
								final report for GSoC 2024 with FOSSASIA
							</p>
						</div>
						<p className="font-helvetica text-sm text-grey transition-colors group-hover:text-black sm:text-right sm:text-base">
							24 Nov 2024
						</p>
					</div>
				</Link>

				<Link
					href="/blog/gsoc/25"
					className="group block rounded-2xl border border-black p-5 transition-colors hover:bg-grey/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-black sm:p-8"
				>
					<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
						<div className="flex w-full flex-col gap-2 font-helvetica sm:w-3/4">
							<h2 className="text-xl font-helvetica sm:text-2xl">GSoC 2025</h2>
							<p className="text-sm font-helvetica leading-relaxed sm:text-base">
								final report for GSoC 2025 with FOSSASIA
							</p>
						</div>
						<p className="font-helvetica text-sm text-grey transition-colors group-hover:text-black sm:text-right sm:text-base">
							26 Oct 2025
						</p>
					</div>
				</Link>
			</section>
		</main>
	);
}
