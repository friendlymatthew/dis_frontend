import { pdfjs, Document, Page } from "react-pdf";
import React, { useState, useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Archive() {
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 2);

	const goToNextPage = () =>
		setPageNumber(pageNumber + 1 >= numPages ? numPages - 1 : pageNumber + 2);

	return (
		<div className="min-h-screen bg-[#c8fc20] text-black">
			<nav className="flex justify-center space-x-4 items-center text-xl py-4">
				<div className="text-xl grid grid-cols-2 border-2 place-items-center border-black divide-x-2 divide-dashed divide-black py-2 border-rounded border-dashed">
					<button
						className="flex px-8 py-2 justify-center"
						onClick={goToPrevPage}
					>
						Prev
					</button>
					<button
						className="flex px-8 py-2 justify-center"
						onClick={goToNextPage}
					>
						Next
					</button>{" "}
				</div>
				<p>
					Page {pageNumber}, {pageNumber + 1} of {numPages}
				</p>
			</nav>
			<div className="flex justify-center">
				<Document
					file="disor_2017 (spring).pdf"
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page pageNumber={pageNumber} />
				</Document>
				<Document
					file="disor_2017 (spring).pdf"
					onLoadSuccess={onDocumentLoadSuccess}
				>
					<Page pageNumber={pageNumber + 1 > numPages ? 1 : pageNumber + 1} />
				</Document>
			</div>
		</div>
	);
}
