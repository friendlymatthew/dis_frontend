export default function SearchBar() {
	return (
		<div className="flex group text-xl lg:text-3xl ">
			<input
				className=" w-full outline-none h-16 border border-black placeholder:text-black placeholder:text-center focus:placeholder:text-white bg-white px-4 focus:bg-black focus:text-white transition ease-in duration-700 mb-20 "
				placeholder="Search keywords for articles"
			/>
			<button className=" hover:underline bg-black text-white h-16 px-20 group-focus:bg-white group-focus:text-black transition ease-in duration-400">
				Search
			</button>
		</div>
	);
}
