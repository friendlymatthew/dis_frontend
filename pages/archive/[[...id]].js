import { pdfjs, Document, Page, twoColumnRight } from "react-pdf";
import React, { useState, useEffect } from "react";
import Image from "next/image";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import Head from "next/head";
const axios = require("axios").default;

import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import LandingText from "../../components/landingtext";
import Viewer from "../../components/storyteller";
import Link from "next/link";
import ArticlePreview from "../../components/articlePreview";
import SearchBar from "../../components/searchbar";

export default function Archive() {
	const [articlepath, setArticlePath] = useState("/disor_e2022s.pdf");
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:6969/article/list")
			.then(function (res) {
				console.log(res.data);
				setData(res.data);
			})
			.catch(function (err) {
				console.log(err);
			})
			.then(function () {});
	}, []);

	return (
		<div>
			<Head>
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

			<div className="bg-white min-h-screen font-roboto flex flex-col justify-between items-center  text-black">
				<nav className="flex space-x-2 justify-end w-8/12 py-4">
					<Link href="/">home</Link>
					<Link href="/archive">archive</Link>
					<Link href="/contact">contact</Link>
				</nav>

				<div className="flex flex-col justify-center items-center w-full">
					<div className="lg:w-8/12 w-full">
						<SearchBar />

						<div className="text-xl pb-1">All Editions</div>
						<div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
							{data.map(({ key }) => {
								return <ArticlePreview key={key} title={key} />;
							})}
						</div>
					</div>
				</div>
				<footer>
					<div>this is the footer</div>
				</footer>
			</div>
		</div>
	);
}
