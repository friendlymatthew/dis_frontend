import { pdfjs, Document, Page, twoColumnRight } from "react-pdf";
import React, { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Viewer({ article }) {
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
		<div className="min-h-screen pt-40 text-black flex justify-center bg-white">
			<div>
				<div className="bg-[#c8fc20] py-8 border-4 border-black border-b-0 flex flex-col items-center">
					<nav className="flex justify-center ">
						<div className="text-3xl font-medium">{title}</div>
					</nav>
				</div>

				<div className="flex justify-center h-1/2">
					<div className="bg-[#fa6cfa] border-black border-4 border-r-0">
						<nav className="flex flex-col justify-between items-center h-full space-x-4 text-2xl font-medium p-4">
							<div>
								<div className="pb-4">
									Page {pageNumber}
									{pageNumber + 1 > numPages ? ", 1" : `, ${pageNumber + 1}`}
								</div>
								<div className="grid grid-cols-1 divide-y-4 divide-black border-4 bg-[#c8fc20] border-black rounded-xl">
									<div
										className="py-4 cursor-pointer flex justify-center"
										onClick={goToPrevPage}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-12 h-12"
										>
											<path
												fillRule="evenodd"
												d="M11.47 4.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 6.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5zm.53 7.59l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 12.31z"
												clipRule="evenodd"
											/>
										</svg>
									</div>

									<div
										className="py-4 cursor-pointer  flex justify-center"
										onClick={goToNextPage}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="currentColor"
											className="w-12 h-12"
										>
											<path
												fillRule="evenodd"
												d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
								</div>
							</div>
						</nav>
					</div>
					<div className="flex justify-center border-4 bg-black  border-black p-4">
						<Document
							file={articlepath}
							onLoadSuccess={onDocumentLoadSuccess}
							pageLayout={twoColumnRight}
						>
							<Page pageNumber={pageNumber} renderTextLayer={false} />
						</Document>
						<Document file={articlepath} onLoadSuccess={onDocumentLoadSuccess}>
							<Page
								pageNumber={pageNumber + 1 > numPages ? 1 : pageNumber + 1}
								renderTextLayer={false}
							/>
						</Document>
					</div>
				</div>
			</div>
		</div>
	);
}
