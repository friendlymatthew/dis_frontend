import { pdfjs, Document, Page, twoColumnRight } from "react-pdf";
import React, { useState, useEffect } from "react";
import Image from "next/image";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

import styles from "../../styles/Home.module.css";
import { motion } from "framer-motion";
import LandingText from "../../components/landingtext";
import Viewer from "../archive/viewer";

export default function Archive() {
	const [articlepath, setArticlePath] = useState("/disor_e2022s.pdf");
	const [numPages, setNumPages] = useState(null);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	return (
		<div className="bg-white min-h-screen flex flex-col justify-start items-center  text-black">
			<marquee className={styles.marqueeParent}>
				<div className={styles.marqueeChild}>
					<div className=" text-white font-extrabold flex items-center h-16 text-2xl ">
						DISORIENTATION 2022 OUT NOW
					</div>
				</div>
			</marquee>

			<motion.div
				className="box"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
			/>

			<div className="w-8/12 py-40">
				<div className="flex justify-center mb-60">
					<LandingText />
				</div>
				<Viewer article="/disor_e2022s.pdf" />
			</div>
		</div>
	);
}
