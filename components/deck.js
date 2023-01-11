import {
	motion,
	useScroll,
	useTransform,
	useSpring,
	MotionValue,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Deck() {
	const [bodyClass, setBodyClass] = useState("");
	const [panel, setPanel] = useState(document.querySelectorAll(".panel"));

	const { scrollYProgress } = useScroll();
	useEffect(() => {}, []);

	return (
		<div>
			<motion.div
				className={styles.progressBar}
				style={{ scaleX: scrollYProgress }}
			>
				Written by mk&apos;23 & nl&apos;23
			</motion.div>
		</div>
	);
}
