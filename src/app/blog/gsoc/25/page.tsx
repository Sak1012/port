import React from "react";
import Link from "next/link";
import Image from "next/image";
import Contributions from "@/components/Contributions";
import gsocLogo from "@/assets/images/gsoc.svg";
import fossasiaLogo from "@/assets/images/fossasia.svg";
export default function Gsoc24() {
	const prs = [
	  	"https://github.com/fossasia/eventyay-tickets/pull/1106",
	  	"https://github.com/fossasia/eventyay-tickets/pull/1088",
	  	"https://github.com/fossasia/eventyay-tickets/pull/1075",
	  	"https://github.com/fossasia/eventyay-tickets/pull/1074",
	  	"https://github.com/fossasia/eventyay-tickets/pull/1047",
	  	"https://github.com/fossasia/eventyay-tickets/pull/1024",
	  	"https://github.com/fossasia/eventyay-tickets/pull/979",
	  	"https://github.com/fossasia/eventyay-tickets/pull/974",
	  	"https://github.com/fossasia/eventyay-tickets/pull/968",
	  	"https://github.com/fossasia/eventyay-tickets/pull/966",
	  	"https://github.com/fossasia/eventyay-tickets/pull/907",
	  	"https://github.com/fossasia/eventyay-tickets/pull/899",
	  	"https://github.com/fossasia/eventyay-tickets/pull/886",
	  	"https://github.com/fossasia/eventyay-tickets/pull/885",
	  	"https://github.com/fossasia/eventyay-tickets/pull/872",
	  	"https://github.com/fossasia/eventyay-tickets/pull/867",
	  	"https://github.com/fossasia/eventyay-tickets/pull/860",
	  	"https://github.com/fossasia/eventyay-tickets/pull/858",
	  	"https://github.com/fossasia/eventyay-tickets/pull/857",
	  	"https://github.com/fossasia/eventyay-tickets/pull/848",
	  	"https://github.com/fossasia/eventyay-tickets/pull/841",
	  	"https://github.com/fossasia/eventyay-tickets/pull/825",
	  	"https://github.com/fossasia/eventyay-tickets/pull/823",
	  	"https://github.com/fossasia/eventyay-tickets/pull/815",
	  	"https://github.com/fossasia/eventyay-tickets/pull/765",
	  	"https://github.com/fossasia/eventyay-tickets/pull/759",
	  	"https://github.com/fossasia/eventyay-tickets/pull/744",
	  	"https://github.com/fossasia/eventyay-tickets/pull/742",
	  	"https://github.com/fossasia/eventyay-tickets/pull/737",
	  	"https://github.com/fossasia/eventyay-tickets/pull/726",
	  	"https://github.com/fossasia/eventyay-tickets/pull/706",
	  	"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/13",
	  	"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/12",
	  	"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/11",
	  	"https://github.com/fossasia/eventyay-checkin/pull/34",
	  	"https://github.com/fossasia/eventyay-tickets/pull/608",
	];
	const reviews = [
  		"https://github.com/fossasia/eventyay-tickets/pull/1108",
  		"https://github.com/fossasia/eventyay-tickets/pull/1105",
  		"https://github.com/fossasia/eventyay-tickets/pull/1104",
  		"https://github.com/fossasia/eventyay-tickets/pull/1086",
  		"https://github.com/fossasia/eventyay-tickets/pull/1067",
  		"https://github.com/fossasia/eventyay-tickets/pull/1066",
  		"https://github.com/fossasia/eventyay-tickets/pull/1064",
  		"https://github.com/fossasia/eventyay-tickets/pull/1063",
  		"https://github.com/fossasia/eventyay-tickets/pull/1060",
  		"https://github.com/fossasia/eventyay-tickets/pull/1056",
  		"https://github.com/fossasia/eventyay-tickets/pull/1053",
  		"https://github.com/fossasia/eventyay-tickets/pull/1045",
  		"https://github.com/fossasia/eventyay-tickets/pull/1040",
  		"https://github.com/fossasia/eventyay-tickets/pull/1038",
  		"https://github.com/fossasia/eventyay-tickets/pull/1035",
  		"https://github.com/fossasia/eventyay-tickets/pull/978",
  		"https://github.com/fossasia/eventyay-tickets/pull/961",
  		"https://github.com/fossasia/eventyay-tickets/pull/922",
  		"https://github.com/fossasia/eventyay-tickets/pull/903",
  		"https://github.com/fossasia/eventyay-tickets/pull/890",
  		"https://github.com/fossasia/eventyay-tickets/pull/889",
  		"https://github.com/fossasia/eventyay-tickets/pull/883",
  		"https://github.com/fossasia/eventyay-tickets/pull/882",
  		"https://github.com/fossasia/eventyay-tickets/pull/880",
  		"https://github.com/fossasia/eventyay-tickets/pull/868",
  		"https://github.com/fossasia/eventyay-tickets/pull/866",
  		"https://github.com/fossasia/eventyay-tickets/pull/836",
  		"https://github.com/fossasia/eventyay-tickets/pull/824",
  		"https://github.com/fossasia/eventyay-tickets/pull/818",
  		"https://github.com/fossasia/eventyay-tickets/pull/810",
  		"https://github.com/fossasia/eventyay-tickets/pull/762",
  		"https://github.com/fossasia/eventyay-tickets/pull/761",
  		"https://github.com/fossasia/eventyay-checkin/pull/37"
	];


	return (
		<main className="flex min-h-screen flex-col p-24">
			<section className="w-full flex flex-row justify-between font-mono text-lg ">
				<section className="flex flex-row items-center gap-2">
					<h1 className="text-5xl font-helvetica">Google Summer of Code 2025</h1>
					<Image
						alt="Google Summer of Code logo"
						src={gsocLogo}
						width={50}
						height={50}
					/>
					<h1 className="text-5xl font-helvetica">FOSSASIA</h1>
					<Image
						alt="FOSSASIA logo"
						src={fossasiaLogo}
						width={75}
						height={25}
					/>

				</section>
				<Link href="/blog" className="underline">
					go back
				</Link>
			</section>
			<section className="flex flex-col w-full pt-9">
				{" "}
				<section className="h-1/4 border-black border-2 rounded">
						<section className="flex w-full flex-col font-helvetica p-6">
							<p className="text-lg font-helvetica"> 
								This document contains my contributions to <a href="https://github.com/fossasia" className="underline"> FOSSASIA</a> as part of GSoC 2025.
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Abstract</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify">
							  During Google Summer of Code 2025 with <b>FOSSASIA</b>, the focus was on advancing the <b>Eventyay “enext”</b> architecture — a unified platform that merges ticketing, talk management, and video functionalities into one cohesive Django-based system. The work centered on consolidating models from the three major components, establishing a consistent file structure, and integrating essential plugins and modules. These efforts strengthened the project’s modularity, simplified maintenance, and ensured smooth interoperability across the platform’s core services.
							</p>
							
							<p className="text-lg font-helvetica mt-4 text-justify">
							  Alongside backend unification, improvements were made to deployment workflows, configuration management, and CI/CD automation through Docker-based pipelines and optimized system setups. Collaborative reviews and issue resolutions across repositories such as <i>eventyay-tickets</i> and <i>eventyay-checkin</i> contributed to a more stable, scalable, and production-ready environment. The overall outcome was a cleaner and more robust architecture, bringing Eventyay closer to a seamless, all-in-one event management solution for the open-source community.
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Projects and Contributions</h2>
							<hr className="mt-4"/>
							
							<Link href="https://github.com/fossasia/eventyay-tickets" className="text-2xl font-helvetica font-black mt-4">Enext</Link>
							
							<p className="text-lg font-helvetica mt-4 text-justify">
  								The <b>Enext</b> branch of <b>Eventyay-Tickets</b> represents the next generation of the Eventyay backend —
  								a unified Django-based architecture that consolidates ticketing, talk management, and video modules into
  								one maintainable system. It replaces the earlier fragmented repositories with a single, consistent framework
  								where organizers can manage events, sessions, and live participation through an integrated backend. The aim
  								is to create a modular, scalable codebase that simplifies development, improves deployment consistency, and
  								enables closer integration with the Check-In and frontend applications.
							  	<br/><br/>
  								Work throughout GSoC 2025 focused on backend unification and structural optimization. A key part of this effort
  								was consolidating models from <i>eventyay-talk</i> and <i>eventyay-video</i> into the tickets core, ensuring
  								migration compatibility and shared data flow. The legacy <b>Item</b> model was refactored into <b>Product</b>,
  								enabling smoother video ticket integration and establishing a cleaner data structure. In parallel, directory
  								and module organization were standardized so that all components — from models to views and templates — followed
  								the same hierarchy under the Enext layout. Multiple development branches were merged, aligning older modules
  								and ensuring that features from previous versions remained functional in the unified setup.
  								<br/><br/>
							  	Extensive work was also done to refactor presale and organizer views for improved flow and logical separation, update 
							  	templates for visual and functional consistency, and ensure that essential plugins such as <b>badges</b>, 
							  	<b>ticketoutput</b>, and global asset imports integrated correctly into the new architecture. Multiple fixes were 
							  	implemented to resolve admin context rendering issues, align navigation elements, and handle runtime errors that 
							  	surfaced during the merging of codebases. These changes formed the core of the Enext transformation — turning a 
							  	collection of loosely connected modules into a unified and stable system ready for production use.
							  	<br/><br/>
							  	Additional work focused on strengthening infrastructure and developer workflows. This included unifying <b>Redis</b> and <b>Celery</b> configurations for consistent background task handling, adapting to the Docker-based PR workflow to automate testing and builds, and cleaning up redundant configurations such as 
							  	obsolete storage variables and static map generation.
							  	<br/><br/>
								Overall, these contributions helped transform Enext into a cohesive and reliable backbone for the Eventyay ecosystem. 
								By unifying the architecture, refining its structure, and ensuring smooth plugin and module integration, 
								the project now serves as a single, scalable foundation for all future Eventyay services — enabling 
								faster development, easier maintenance, and seamless interoperability across the entire platform.
							</p>
							
							<h4 className="text-lg font-helvetica font-black mt-4">Contributions:</h4>
							<Contributions prs={prs} />
							<h4 className="text-lg font-helvetica font-black mt-4">Reviews:</h4>
							<Contributions prs={reviews} />
							<h2 className="text-3xl font-helvetica font-black mt-4">Acknowledgements</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify">
								I would like to extend my heartfelt gratitude to my mentors <a href="https://github.com/mariobehling" className="underline">Mario Behling</a>, <a href="https://github.com/norbusan" className="underline">Norbert Preining</a>,  <a href="https://github.com/hongquan" className="underline">Hong Quan</a> and <a href="https://github.com/rolandturner" className="underline">Roland Turner</a> for their invaluable guidance and support throughout my GSoC experience. Their expertise and encouragement helped me navigate the challenges of my projects and inspired me to push my boundaries. I also sincerely appreciate the flexibility they provided regarding project timelines and goals, which made these contributions possible.
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Final Note</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify">
							  Taking part in Google Summer of Code with <a href="https://github.com/fossasia" className="underline">FOSSASIA</a> has been a deeply enriching and fulfilling experience. Collaborating with a vibrant open-source community, 
							  contributing to a large-scale project, and working through real-world technical challenges allowed for 
							  tremendous professional and personal growth. Each task brought new insights into building scalable systems 
							  and maintaining collaborative workflows in an evolving codebase. I am grateful for the mentorship, teamwork, 
							  and opportunities this program provided, and I look forward to continuing to contribute to <a href="https://github.com/fossasia" className="underline"> FOSSASIA</a> and its mission of creating accessible, open technologies for everyone.
							</p>
							<p className="text-sm text-grey mt-12">Srivatsav Auswin - 26 Oct 2024 - Chennai, India</p>
						</section>
				</section>
			</section>
		</main>
	);
}
