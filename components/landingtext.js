const about =
	"We’re here to help. Disorientation is a student publication that started in the 1970s for the purpose of telling new students everything about Wesleyan that no one else will. This year, though, as we emerge through the latest stages of the pandemic, everyone could use a little ";

import ScrollAnimation from "react-animate-on-scroll";

export default function LandingText({}) {
	return (
		<div className=" ">
			<div className="text-xl md:text-4xl pb-4 font-roboto">
				It&apos;s Fall 2022.{" "}
			</div>
			<div className=" font-roboto">
				<span className="tracking-tighter transition ease-in duration-300 text-xl md:text-3xl">
					You&apos;re a
					<span className="font-semibold text-2xl md:text-5xl group px-2 cursor-pointer">
						senior,
					</span>
					years past being oriented, disillusioned and trying to finish
					something you started before an illness started going around.
				</span>
				<span className="tracking-tight text-xl md:text-3xl font-medium">
					{" "}
					Or perhaps, you’re a
					<span className="text-2xl md:text-4xl px-2 font-semibold">
						junior,
					</span>
					whose orienting was splintered across cyberspace on a campus that
					deemed socializing intimately illegal.
				</span>
				<span className="text-lg md:text-3xl tracking-wide font-bold">
					{" "}
					You could also be a{" "}
					<span className="text-2xl md:text-4xl px-2">sophmore</span>, maybe
					even one who was welcomed to the Butterfields by a flood on the first
					night of classes.
				</span>
				<span className="text-lg md:text-3xl tracking-widest font-extrabold">
					{" "}
					If you don’t belong anywhere on that timeline, then you’re likely a{" "}
					<span className="text-xl md:text-4xl px-2">freshman</span>, and you
					finished your official orientation in August and have spent a month
					here trying to get a hold of the ropes.
				</span>
			</div>
			<div className="font-roboto pt-8 text-xl md:text-3xl tracking-widest font-semibold text-black">
				<span>{about}</span>
				<ScrollAnimation
					delay={2000}
					duration={7}
					animateIn="hinge"
					animateOut="hinge"
					initiallyVisible={true}
				>
					<span className="text-3xl">disorienting.</span>
				</ScrollAnimation>
			</div>
		</div>
	);
}
