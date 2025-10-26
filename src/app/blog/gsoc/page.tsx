import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col p-24">
			<section className="w-full flex flex-row justify-between font-mono text-lg ">
				<section className="flex flex-col">
					<h1 className="text-9xl font-helvetica ">gsoc</h1>
				</section>
				<Link href="/blog" className="underline">
					go back
				</Link>
			</section>
		<section className="flex flex-col w-full pt-9">
			{" "}
			<Link href="gsoc/24">
				<section className="h-1/4 border-black border-2 rounded mt-2">
					<section className="flex flex-row justify-between p-4">
						<section className="flex w-1/2 flex-col font-helvetica">
							<h1 className="text-lg font-helvetica">GSoC 2024</h1>
							<p className="text-sm font-helvetica">
								final report for GSoC 2024 with FOSSASIA
							</p>
						</section>
						<section className="flex text-sm text-grey font-helvetica p-2">
							{" "}
							24 Nov 2024{" "}
						</section>
					</section>
				</section>
			</Link>
			<Link href="gsoc/25">
			<section className="h-1/4 border-black border-2 rounded mt-2">
				<section className="flex flex-row justify-between p-4">
					<section className="flex w-1/2 flex-col font-helvetica">
						<h1 className="text-lg font-helvetica">GSoC 2025</h1>
						<p className="text-sm font-helvetica">
							final report for GSoC 2025 with FOSSASIA
						</p>
					</section>
					<section className="flex text-sm text-grey font-helvetica p-2">
						{" "}
						26 Oct 2025{" "}
					</section>
				</section>
			</section>
			</Link>
		</section>
		</main>
	);
}
