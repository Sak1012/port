import React from "react";
import Link from "next/link";
import Image from "next/image";
import Contributions from "@/components/Contributions";
import gsocLogo from "@/assets/images/gsoc.svg";
import fossasiaLogo from "@/assets/images/fossasia.svg";
export default function Gsoc24() {
	const exhibitorsPRs = [
		"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/1",
		"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/3",
		"https://github.com/fossasia/eventyay-tickets-exhibitors/pull/4",
	];
	const badgePRs = [
		"https://github.com/fossasia/eventyay-tickets/pull/197",
		"https://github.com/fossasia/eventyay-tickets/pull/221",
		"https://github.com/fossasia/eventyay-tickets/pull/229",
		"https://github.com/fossasia/eventyay-tickets/pull/420",
	];
	const checkinPRs = [
		"https://github.com/fossasia/eventyay-tickets/pull/420",
	];
	const openEventCheckinPRs = [
		"https://github.com/fossasia/open-event-checkin/pull/115",
	];
	const otherPRs = [
		"https://github.com/fossasia/eventyay-tickets/pull/85",
		"https://github.com/fossasia/eventyay-talk/pull/102",
		"https://github.com/fossasia/eventyay-tickets/pull/249",
		"https://github.com/fossasia/eventyay-tickets/pull/304",
	];

	return (
		<main className="flex min-h-screen flex-col p-24">
			<section className="w-full flex flex-row justify-between font-mono text-lg ">
				<section className="flex flex-row items-center gap-2">
					<h1 className="text-5xl font-helvetica">Google Summer of Code 2024</h1>
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
								This document contains my contributions to <a href="https://github.com/fossasia" className="underline"> FOSSASIA</a> as part of GSoC 2024 work which is a combination of several components. 
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Abstract</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify"> 
								Throughout GSoC, I had the opportunity to work extensively with the <b>Eventyay</b> ecosystem, contributing to core components like the Eventyay-Tickets platform and its plugins Exhibitors and Badge and the Open-Event-Checkin system. Each module presented unique challenges and learning experiences that allowed me to deepen my technical expertise and positively impact the functionality of the Eventyay platform. I contributed to backend improvements, designed API endpoints, and modified the database structure to facilitate more features.
								<br/>
								<br/>
								In the <b>Exhibitors Plugin</b>, I developed features to add and manage exhibitors and support lead scanning for exhibitors, allowing them to manage leads with an intuitive interface. This included setting up the API to handle lead creation and retrieval requests and designing the data flow for handling attendee details securely. I also incorporated custom authorization methods, making sure only authorized exhibitors could access specific information, thus enhancing the plugin’s security. For the <b>Badge Plugin</b>, my work involved creating endpoints to generate attendee badges and implementing a feature to preview badges and to print or download them. I developed the backend logic to manage badge generation, integrated it with PDF generation for easy download, and built a preview view for the frontend application, which was powered by Vue.js. This allowed organizers to effortlessly manage badges, further streamlining the event check-in process. In the <b>Open-Event-Checkin</b> system, I focused changing the interface and functionality to integrate it with Eventyay.
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Projects and Contributions</h2>
							<hr className="mt-4"/>
							<Link href="https://github.com/fossasia/eventyay-tickets-exhibitors" className="text-2xl font-helvetica font-black mt-4">Exhibitors Plugin</Link>
							<p className="text-lg font-helvetica mt-4 text-justify">
								One of my primary projects during GSoC was building the <b>Exhibitor Plugin</b> from scratch. This plugin serves two main purposes: first, to allow event organizers to create and manage exhibitors, and second, to provide exhibitors with an integrated lead scanning functionality. The Exhibitor Plugin streamlines the setup for exhibitors, enabling them to set up profiles and manage their participation in events. Additionally, it equips them with lead-scanning capabilities to engage with attendees by scanning badges, securely capturing attendee information in real-time.
								<br/>
								<br/>
								Starting with the foundational setup, I created models for managing exhibitor details and set up an API to handle exhibitor creation and updates, as shown in <a href="https://github.com/fossasia/eventyay-tickets-exhibitors/pull/1" className="underline">PR #1</a>. In <a href="https://github.com/fossasia/eventyay-tickets-exhibitors/pull/3" className="underline">PR #3</a>, I added Tests and setup Github Actions to better maintain the code. Finally, I then extended the plugin to support lead scanning by implementing secure data flows for attendee data, ensuring exhibitors could collect lead information and I also incorporated custom authorization in <a href="https://github.com/fossasia/eventyay-tickets-exhibitors/pull/4" className="underline">PR #4</a>, adding exhibitor-specific keys to restrict data access, ensuring only authorized exhibitors could view or manage leads.
							</p>
							<h4 className="text-lg font-helvetica font-black mt-4">Contributions:</h4>
							<Contributions prs={exhibitorsPRs} />
							<Link href="https://github.com/fossasia/eventyay-tickets/tree/development/src/pretix/plugins/badges" className="text-2xl font-helvetica font-black mt-4">Badge Plugin</Link>
							<p className="text-lg font-helvetica mt-4 text-justify">
								The Badge Plugin is designed to streamline badge generation and management, providing event organizers with an efficient way to create, customize, and distribute badges to attendees. My work involved building backend logic for badge generation, integrating PDF generation for badge downloads, and adding a badge preview feature to simplify the checkin process for organizers.
								<br/>
								<br/>
								In the initial stages, I established the badge layout endpoint to include a size field to make use of the layouts more conveniently <a href="https://github.com/fossasia/eventyay-tickets/pull/197" className="underline">PR #197</a> and <a href="https://github.com/fossasia/eventyay-tickets/pull/221" className="underline">PR #221</a>, making it more flexible for various event types. In <a href="https://github.com/fossasia/eventyay-tickets/pull/229" className="underline">PR #229</a>, I added five uniquely designed templates for badges giving more options to the organisers to choose from other than a single default option. Finally, in <a href="https://github.com/fossasia/eventyay-tickets/pull/420" className="underline">PR #420</a>, I introduced API's for badge preview and download feature for the frontend, enabling organizers to view a badge’s layout and details during checkin.
							</p>
							<h4 className="text-lg font-helvetica font-black mt-4">Contributions:</h4>
							<Contributions prs={badgePRs} />
							<Link href="https://github.com/fossasia/eventyay-tickets" className="text-2xl font-helvetica font-black mt-4">Eventyay-Tickets: Check-In API</Link>
							<p className="text-lg font-helvetica mt-4 text-justify">
								I contributed to enhancing the Check-In API within the Eventyay-Tickets platform, aimed at making the event check-in process seamless and efficient. This new API allows organizers to manage attendee check-ins with badge-printing functionality. My work on the Check-In API focused on refining endpoint functionality and optimizing response data.
								<br/>
								<br/>
								In <a href="https://github.com/fossasia/eventyay-tickets/pull/420" className="underline">PR #420</a>, I re-defined a new Check-In API. This included adding a new endpoint for check-in. I also enhanced error handling within the API, ensuring that the system could handle revoked and ambiguous tickets. Additionally, I integrated badge generation at checkin, strengthening the API’s feature.
							</p>
							<h4 className="text-lg font-helvetica font-black mt-4">Contributions:</h4>
							<Contributions prs={checkinPRs} />
							<Link href="https://github.com/fossasia/open-event-checkin" className="text-2xl font-helvetica font-black mt-4">Open-Event-Checkin</Link>
							<p className="text-lg font-helvetica mt-4 text-justify">
								One of the most impactful projects in my GSoC journey was transforming the Open-Event-Checkin application, overhauling its workflow to better integrate with the updated Eventyay system and expand its capabilities. This transformation introduced a streamlined experience for both organizers and exhibitors, with an entirely new workflow that provides check-in and badge generation features for event organizers, while also supporting exhibitors with lead management tools such as lead scanning, tagging, note-taking, and lead exporting.
								<br/>
								<br/>
								In a single, comprehensive PR—<a href="https://github.com/fossasia/open-event-checkin/pull/115" className="underline">PR #115</a> i implemented these significant changes. i restructured the application to ensure smooth integration with the eventyay platform, focusing on ease of use by profiling each users with a modified login screen. for exhibitors, i added functionalities that allow them to scan badges, add personalized notes, apply tags, and export lead information in a csv format, giving them a complete toolset to engage with attendees meaningfully. on the organizer side, i integrated check-in capabilities and badge printing or downloading directly into the workflow, making it a one-stop solution for managing attendee engagement.
								<br/>
								<br/>
								This extensive work involved both frontend and backend modifications, requiring in-depth changes to multiple parts of the application, as shown in the commit history for <a href="https://github.com/fossasia/open-event-checkin/pull/115" className="underline">PR #115</a>, where I introduced new data flows and optimized existing processes to deliver an application that is intuitive, powerful, and fully aligned with Eventyay.
							</p>
							<h4 className="text-lg font-helvetica font-black mt-4">Contributions:</h4>
							<Contributions prs={openEventCheckinPRs}/>
							<h4 className="text-xl font-helvetica font-black mt-4">Other Contributions:</h4>
							<Contributions prs={otherPRs}/>
							<h2 className="text-3xl font-helvetica font-black mt-4">Acknowledgements</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify">
								I would like to extend my heartfelt gratitude to my mentors, <a href="https://github.com/mariobehling" className="underline">Mario Behling</a> and <a href="https://github.com/hongquan" className="underline">Hong Quan</a>, for their invaluable guidance and support throughout my GSoC experience. Their expertise and encouragement helped me navigate the challenges of my projects and inspired me to push my boundaries. I also sincerely appreciate the flexibility they provided regarding project timelines and goals, which made these contributions possible.
							</p>
							<h2 className="text-3xl font-helvetica font-black mt-4">Final Note</h2>
							<hr className="mt-4"/>
							<p className="text-lg font-helvetica mt-4 text-justify">
								Participating in GSoC and contributing to <a href="https://github.com/fossasia" className="underline">FOSSASIA</a> has been an incredibly rewarding experience. I thoroughly enjoyed working on various projects, collaborating with a talented community, and honing my skills in real-world applications. The challenges I faced were invaluable learning opportunities, and I am grateful for the chance to contribute to such impactful open-source initiatives. I look forward to continuing my journey with <a href="https://github.com/fossasia" className="underline">FOSSASIA</a> and making further contributions that can help enhance our projects and benefit the community.
							</p>
							<p className="text-sm text-grey mt-12">Srivatsav Auswin - 23 Nov 2024 - Chennai, India</p>
						</section>
				</section>
			</section>
		</main>
	);
}
