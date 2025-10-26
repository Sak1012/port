import React from "react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex w-full flex-col gap-4 pt-9">
			<section className="rounded-2xl border border-black bg-white/70 p-5 sm:p-8">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
					<div className="flex w-full flex-col gap-2 font-helvetica sm:w-3/4">
						<h1 className="text-xl font-helvetica sm:text-2xl">hello world!</h1>
						<p className="text-sm font-helvetica leading-relaxed sm:text-base">
							this is my first post here! with many to come, this page is going
							to be more of a public journal where i share my opinions and
							thoughts on stuff that i find interesting or stuff that i am
							working on at the moment or anything that i feel like sharing
						</p>
					</div>
					<p className="font-helvetica text-sm text-grey sm:text-right sm:text-base">
						23 Nov 2024
					</p>
				</div>
			</section>

			<Link
				href="blog/gsoc/24"
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
				href="blog/gsoc/25"
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
		</main>
	);
}
