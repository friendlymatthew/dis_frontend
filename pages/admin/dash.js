import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import Article from "../../components/article";

export default function Dash(props) {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<div className="bg-white min-h-screen text-black p-8">
			<div className="bg-white border-2 rounded p-8">
				<div
					{...getRootProps({
						className: "bg-[#fafafa] border-2 border-dashed rounded p-8",
					})}
				>
					<input {...getInputProps()} />
					<p>Drag n drop some files here, or click to select files</p>
				</div>

				<aside className="bg-orange-300 mt-8">
					<h4>Files</h4>
					<ul>{files}</ul>
				</aside>
			</div>

			<div className="flex flex-wrap justify-center">
				{acceptedFiles.map(({ path, size }) => {
					return <Article name={path} size={size} />;
				})}
			</div>
		</div>
	);
}
