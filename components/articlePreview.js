export default function ArticlePreview({ title }) {
	return (
		<div className="cursor-pointer text-center hover:bg-black hover:text-white transition ease-in duration-300 p-2 border border-black">
			<div>{title}</div>
		</div>
	);
}
