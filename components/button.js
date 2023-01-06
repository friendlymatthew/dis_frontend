import React, { useEffect, useState } from "react";

export default function Button({ action, size, color }) {
	const [thick, setThick] = useState("3");
	const [palette, setPalette] = useState("#c8ff20");

	useEffect(() => {
		if (size) {
			setThick(size);
		}

		if (color) {
			setPalette(color);
		}
	}, []);

	return (
		<div
			className={`border-[${thick}px] border-dashed rounded hover:bg-[#f86ffb]  transition ease-in duration-300 border-black px-4 py-2`}
		>
			{action}
		</div>
	);
}
