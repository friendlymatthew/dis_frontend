import Head from "next/head";

import { InstagramEmbed } from "react-social-media-embed";

export default function Contact() {
	return (
		<div>
			<Head>
				<title>Disorientation</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Erica+One&family=Fira+Sans:wght@400;500&family=Noticia+Text:ital,wght@0,700;1,400&family=Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<div className="font-roboto bg-white min-h-screen text-3xl text-black">
				this is the contact page
				<div style={{ display: "flex", justifyContent: "center" }}>
					<InstagramEmbed
						url="http://www.instagram.com/disorientation.wes/"
						width={328}
						captioned
					/>
				</div>
			</div>
		</div>
	);
}
