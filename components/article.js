export default function Article({ name, path }) {
	return (
		<div className="w-96 p-8 border rounded border-black ">
			<div>file src: {name}</div>
			<div>
				year: <input />
			</div>
			<div>
				semester: <input />
			</div>

			<a>submit</a>
		</div>
	);
}
