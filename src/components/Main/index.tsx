import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
	return (
		<main className="w-full flex flex-col items-center justify-between">
			<section className="min-h-screen bg-grey w-full flex flex-col justify-between">
				<section className="w-full flex flex-col lg:flex-row justify-center font-mono">
					<p className="text-black text-5xl sm:text-7xl lg:text-[225px] font-helvetica font-medium lg:leading-[185px] p-5 sm:p-10">
						Srivatsav Auswin
					</p>
					<p className="text-5xl sm:text-7xl lg:text-[225px] font-helvetica font-medium lg:leading-[180px] p-5 sm:p-10">
						*
					</p>
				</section>
				<section className="w-full h-72 sm:h-96 flex flex-col sm:flex-row items-center justify-between bg-yellow">
					<p className="font-helvetica font-medium text-3xl sm:text-[50px] lg:text-[85px] leading-[40px] sm:leading-[60px] lg:leading-[80px] p-5 sm:p-10">
						HELLO THERE,
						<br /> WELCOME TO MY WORLD
					</p>
					<p className="font-helvetica font-medium text-5xl sm:text-[70px] lg:text-[100px] leading-[80px] p-5 sm:p-10">
						↓
					</p>
				</section>
			</section>
			<section className="flex flex-col justify-between bg-grey w-full min-h-screen">
				<p className="font-helvetica font-medium text-3xl sm:text-[50px] lg:text-[85px] leading-[40px] sm:leading-[60px] lg:leading-[80px] p-5 sm:p-10">
					KNOW MORE ABOUT ME
					<br /> AS A
				</p>
				<section className="flex flex-col items-end w-full justify-between font-helvetica font-medium p-5 sm:p-20">
					<section className="w-full sm:w-2/4 h-0 border border-black"></section>
					<section className="flex flex-row w-full sm:w-2/4 hover:text-yellow">
						<p className="font-helvetica font-medium text-3xl sm:text-7xl lg:text-9xl">
							1
						</p>
						<Link
							className="font-helvetica font-medium text-xl sm:text-5xl lg:text-7xl hover:text-yellow pl-5 sm:pl-20"
							href="https://github.com/Sak1012"
						>
							Developer
						</Link>
					</section>
					<section className="w-full sm:w-2/4 h-0 border border-black"></section>
					<section className="flex flex-row w-full sm:w-2/4 hover:text-yellow">
						<p className="font-helvetica font-medium text-3xl sm:text-7xl lg:text-9xl">
							2
						</p>
						<Link
							className="font-helvetica font-medium text-xl sm:text-5xl lg:text-7xl pl-5 sm:pl-20"
							href="/designer"
						>
							Designer
						</Link>
					</section>
					<section className="w-full sm:w-2/4 h-0 border border-black"></section>
					<section className="flex flex-row w-full sm:w-2/4 hover:text-yellow">
						<p className="font-helvetica font-medium text-3xl sm:text-7xl lg:text-9xl">
							3
						</p>
						<Link
							className="font-helvetica font-medium text-xl sm:text-5xl lg:text-7xl pl-5 sm:pl-20"
							href="https://www.instagram.com/srivatsav_ak/"
						>
							Photographer
						</Link>
					</section>
				</section>
				<section className="flex flex-row justify-between w-full p-5">
					<p className="text-sm sm:text-lg font-helvetica font-medium text-yellow">
						SRIVATSAV AUSWIN
					</p>
					<Link
						href="/blog"
						className="text-sm sm:text-lg font-helvetica font-semibold text-yellow"
					>
						####<span className="text-xs sm:text-sm font-thin"> ↗︎ </span>
					</Link>
					<p className="text-2xl sm:text-5xl font-helvetica font-medium text-yellow">
						***
					</p>
				</section>
			</section>
		</main>
	);
}
