import { pdfjs, Document, Page, twoColumnRight } from "react-pdf";
import React, { useState, useEffect } from "react";
import Image from "next/image";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const axios = require("axios").default;

import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import LandingText from "../../components/landingtext";
import Viewer from "../../components/storyteller";

export default function Archive() {
	const [articlepath, setArticlePath] = useState("/disor_e2022s.pdf");
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	useEffect(() => {
		axios
			.get("http://localhost:9090/file/list/files")
			.then(function (res) {
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			})
			.then(function () {
				console.log("hi");
			});
	}, []);

	return (
		<div className="bg-white min-h-screen flex flex-col justify-between items-center  text-black">
			<nav className="flex space-x-2 justify-end w-8/12 py-4">
				<div>home</div>
				<div>archive</div>
				<div>contact</div>
			</nav>
			<div className="flex flex-col justify-center items-center w-full">
				<input
					className="border outline-none border-black placeholder:text-black focus:placeholder:text-white focus:border-white bg-white h-16 text-3xl px-4 focus:bg-black focus:text-white transition ease-in duration-700 w-4/12"
					placeholder="Search keywords for articles"
				/>
				<div className="w-full grid grid-cols-4">
					<div></div>
				</div>
			</div>
			<footer>
				<div>this is the footer</div>
			</footer>
		</div>
	);
}
