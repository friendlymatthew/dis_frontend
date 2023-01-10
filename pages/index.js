import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useRef } from "react";

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
import LandingText from "../components/landingtext";
import { Nav, Title } from "../styles/styled";
import { wrap } from "@motionone/utils";
import Viewer from "../components/storyteller";

function useParallax(value, distance) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageText({ id, size, wig }) {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 70);

	return (
		<div className="w-full flex justify-center">
			<section className="">
				<div ref={ref} className="w-8/12 pl-30">
					<motion.h1 style={{ y }}>
						<div className="">
							<img src={id} className={`h-64 w-96`} />
						</div>
					</motion.h1>
				</div>
			</section>
		</div>
	);
}

function ImageComponent({ id }) {
	const { scrollYProgress } = useScroll();
	const y = useParallax(scrollYProgress, 70);

	return (
		<div className="w-full flex justify-center">
			<section className="">
				<div ref={ref} className="w-full">
					<motion.h1 style={{ y }}>
						<div className=" w-full">
							<img src={"/1tag.png"} />
						</div>
					</motion.h1>{" "}
				</div>

				<img src={`/${id}.png`} alt="A London skyscraper" />
			</section>
		</div>
	);
}

function ParallaxText({ children, baseVelocity = 400 }) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

		baseX.set(baseX.get() + moveBy);
	});

	/**
	 * The number of times to repeat the child text should be dynamically calculated
	 * based on the size of the text and viewport. Likewise, the x motion value is
	 * currently wrapped between -20 and -45% - this 25% is derived from the fact
	 * we have four children (100% / 4). This would also want deriving from the
	 * dynamically generated number of children.
	 */
	return (
		<div className={styles.parallax}>
			<motion.div className={styles.scroller} style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	);
}

export default function Home() {
	const { scrollYProgress } = useScroll({});
	const x = useTransform(scrollYProgress, [-0.01, 0.3], [0, 2000]);

	const y = useParallax(scrollYProgress, 70);

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	useEffect(() => {}, []);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>

				<link
					href="https://fonts.googleapis.com/css2?family=Erica+One&family=Fira+Sans:wght@400;500&family=Noticia+Text:ital,wght@0,700;1,400&family=Roboto+Mono&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<main className="">
				<div className="group h-screen flex flex-col justify-between bg-cover bg-[url('/wallpaper.svg')]">
					<nav></nav>
					<div className="pt-[25em]">
						<ImageText id={"/landinglips.png"} size={24} />
						<div className="flex justify-center text-xl space-x-4 text-black  font-roboto">
							<a className="bg-white px-12 py-4 border border-[#7a7a7a]  text-black hover:bg-black hover:text-white transition ease-in duration-500  cursor-pointer	">
								Who we are
							</a>
							<a className="bg-white px-12 py-4 border border-[#7a7a7a] text-black hover:bg-black hover:text-white transition ease-in duration-500 cursor-pointer	">
								Archive
							</a>
							<a className="bg-white px-12 py-4 border border-[#7a7a7a] text-black hover:bg-black hover:text-white transition ease-in duration-500 cursor-pointer ">
								Contact
							</a>
						</div>
					</div>
					<div className="font-ericas text-[6em] text-black transition ease-in duration-400   tracking-tight">
						<Title style={{ x }}>SPRING EDITION 2022 BELOW</Title>
					</div>
				</div>

				<div className="group flex flex-col justify-between min-h-screen lg:h-screen w-full group bg-white text-black">
					<div className="">
						<div className="my-8 bg-white text-xs font-nokia">
							<motion.div
								className={styles.progressBar}
								style={{ scaleX: scrollYProgress }}
							>
								Written by mk'23 & nl'23
							</motion.div>
						</div>
					</div>
					<div className="w-full flex justify-center">
						<div className="w-8/12">
							<LandingText />
						</div>
					</div>
				</div>

				<div className="pt-40 min-h-screen bg-white flex flex-col justify-end text-black">
					<Viewer article={"disor_e2022s.pdf"} />
				</div>

				<section className="w-full bg-white text-black">
					<ParallaxText baseVelocity={-5}>DISORIENTATION</ParallaxText>
					<ParallaxText baseVelocity={15}>READ NOW</ParallaxText>
				</section>
			</main>
		</>
	);
}
