import { pdfjs, Document, Page, twoColumnRight } from "react-pdf";
import React, { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function StoryTeller({ article }) {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const [articlepath, setArticlePath] = useState(article);
	const [title, setTitle] = useState("");

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () => {
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 2);
	};

	const goToNextPage = () => {
		setPageNumber(pageNumber + 1 >= numPages ? numPages - 1 : pageNumber + 2);
	};

	/**
	 * when we post + delete articles, we are going to build our own titles!
	 * This will allow us to develop a parsing + lexor system to add informations
	 *
	 * attrs we want to store: edition year (&& v ||) season?
	 *
	 * file for disorientation 2017
	 * path: "disor_e2017s"
	 *
	 * file for disorientation 2015 spring
	 * path: "disor_e2015sspring"
	 *
	 */
	const parseArticle = (path) => {
		// 0 -> 5 are disor_

		let title = [];
		let year = path.substring(7, 11);

		title[0] = year;

		let season = "";
		if (path.substring(11) != path.length - 1) {
			for (let idx = 12; idx <= path.length - 5; idx++) {
				season += path[idx];
			}

			title[1] = season;
		}

		console.log(title);
		return title;
	};

	useEffect(() => {
		var article_title = parseArticle(articlepath.substring(1));

		if (
			article_title.length == 1
				? setTitle("Disorientation " + article_title[0])
				: setTitle(
						"Disorientation " + article_title[1] + " " + article_title[0]
				  )
		)
			setTitle(article_title);
	}, []);

	return (
		<div className="min-h-screen pt-40 text-black flex justify-center items-center ">
			<div>
				<div className="text-3xl flex space-x-8 font-semibold font-firas">
					<a
						onClick={goToPrevPage}
						className="bg-black py-3 px-4 text-white cursor-pointer"
					>
						Previous
					</a>
					<a
						onClick={goToNextPage}
						className="bg-black py-3 px-4 text-white cursor-pointer"
					>
						Next
					</a>
				</div>
				<div className="flex justify-center  h-1/2">
					<div className="flex justify-center bg-black p-3">
						<Document file={article} onLoadSuccess={onDocumentLoadSuccess}>
							<Page pageNumber={pageNumber} renderTextLayer={false} size="A4" />
						</Document>
						<Document file={article} onLoadSuccess={onDocumentLoadSuccess}>
							<Page
								pageNumber={pageNumber + 1 > numPages ? 1 : pageNumber + 1}
								renderTextLayer={false}
								size="A4"
							/>
						</Document>
					</div>
				</div>
			</div>
		</div>
	);
}
