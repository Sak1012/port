import React from "react";
import Link from "next/link";
export default function Home() {
	return (
		<main className="flex w-full flex-col items-center justify-between">
			<section className="flex w-full min-h-screen flex-col justify-between bg-grey">
				<section className="flex w-full flex-col items-start gap-2 px-5 py-10 font-mono sm:px-10 sm:py-16 lg:flex-row lg:items-end lg:justify-center lg:gap-6">
					<p className="p-0 font-helvetica font-medium text-black text-4xl sm:text-6xl lg:text-[225px] lg:leading-[185px]">
						Srivatsav Auswin
					</p>
					<p className="font-helvetica font-medium text-4xl sm:text-6xl lg:text-[225px] lg:leading-[180px]">
						*
					</p>
				</section>
				<section className="flex w-full flex-col items-center justify-between gap-6 bg-yellow px-5 py-12 sm:flex-row sm:px-10 sm:py-16">
					<p className="font-helvetica font-medium text-center text-2xl leading-tight sm:text-left sm:text-4xl sm:leading-[52px] lg:text-[85px] lg:leading-[80px]">
						HELLO THERE,
						<br /> WELCOME TO MY WORLD
					</p>
					<p className="font-helvetica font-medium text-4xl sm:text-6xl lg:text-[100px] lg:leading-[80px]">
						↓
					</p>
				</section>
			</section>
			<section className="flex w-full min-h-screen flex-col justify-between bg-grey">
				<p className="px-5 py-10 font-helvetica font-medium text-2xl leading-snug sm:px-10 sm:text-4xl sm:leading-[52px] lg:text-[85px] lg:leading-[80px]">
					KNOW MORE ABOUT ME
					<br /> AS A
				</p>
				<section className="flex w-full flex-col items-start justify-between gap-6 px-5 pb-10 font-helvetica font-medium sm:items-end sm:px-10 sm:pb-20">
					<section className="h-0 w-full border border-black sm:w-2/3 lg:w-1/2"></section>
					<section className="flex w-full flex-col gap-2 hover:text-yellow sm:w-2/3 sm:flex-row sm:items-center lg:w-1/2">
						<p className="font-helvetica font-medium text-3xl sm:text-6xl lg:text-8xl">
							1
						</p>
						<Link
							className="pl-1 font-helvetica font-medium text-xl sm:pl-10 sm:text-4xl lg:text-6xl"
							href="https://github.com/Sak1012"
						>
							Developer
						</Link>
					</section>
					<section className="h-0 w-full border border-black sm:w-2/3 lg:w-1/2"></section>
					<section className="flex w-full flex-col gap-2 hover:text-yellow sm:w-2/3 sm:flex-row sm:items-center lg:w-1/2">
						<p className="font-helvetica font-medium text-3xl sm:text-6xl lg:text-8xl">
							2
						</p>
						<Link
							className="pl-1 font-helvetica font-medium text-xl sm:pl-10 sm:text-4xl lg:text-6xl"
							href="/designer"
						>
							Designer
						</Link>
					</section>
					<section className="h-0 w-full border border-black sm:w-2/3 lg:w-1/2"></section>
					<section className="flex w-full flex-col gap-2 hover:text-yellow sm:w-2/3 sm:flex-row sm:items-center lg:w-1/2">
						<p className="font-helvetica font-medium text-3xl sm:text-6xl lg:text-8xl">
							3
						</p>
						<Link
							className="pl-1 font-helvetica font-medium text-xl sm:pl-10 sm:text-4xl lg:text-6xl"
							href="https://www.instagram.com/srivatsav_ak/"
						>
							Photographer
						</Link>
					</section>
				</section>
				<section className="flex w-full flex-col gap-3 px-5 pb-10 text-left sm:flex-row sm:items-center sm:justify-between sm:px-10">
					<p className="font-helvetica font-medium text-yellow text-sm sm:text-base">
						SRIVATSAV AUSWIN
					</p>
					<Link
						href="/blog"
						className="font-helvetica font-semibold text-yellow text-sm sm:text-base"
					>
						####<span className="text-xs font-thin sm:text-sm"> ↗︎ </span>
					</Link>
					<a
						href="mailto:auswinsrivatsav@gmail.com"
						className="font-helvetica font-medium text-yellow text-sm sm:text-base"
					>
						CONTACT
					</a>
					<Link
						href="https://buymeacoffee.com/sak1012"
						className="font-helvetica font-medium text-yellow text-sm sm:text-base"
					>
						BUY ME A COFFEE
					</Link>
				</section>
			</section>
		</main>
	);
}
