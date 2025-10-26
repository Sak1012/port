import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
	return (
		<main className="flex flex-col w-full pt-9">
			{" "}
			<section className="h-1/4 border-black border-2 rounded">
				<section className="flex flex-row justify-between p-4">
					<section className="flex w-1/2 flex-col font-helvetica">
						<h1 className="text-lg font-helvetica">hello world!</h1>
						<p className="text-sm font-helvetica">
							{" "}
							this is my first post here! with many to come,
							<br />
							this page is going to be more of a public journal where i share my
							opinions and thoughts on stuff that i find interesting or stuff
							that i am working on at the moment or anything that i feel like
							sharing
						</p>
					</section>
					<section className="flex text-sm text-grey font-helvetica p-2">
						{" "}
						23 Nov 2024{" "}
					</section>
				</section>
			</section>
			<Link href="blog/gsoc/24">
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
			<Link href="blog/gsoc/25">
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
		</main>
	);
}
