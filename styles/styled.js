import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled.div`
	height: 100vh;
	width: 100%;
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: between;
	flex-direction: column;
	color: black;
`;

export const BackgroundImg = styled.img`
	width: 100%;
	height: 100%;
	background-color: white;
	position: absolute;
	opacity: 0.8;
`;

export const Title = styled(motion.h1)`
	font-weight: 800;
	z-index: 1;
	margin: 0;
	white-space: nowrap;
	margin-top: auto;
	transition: all 1s ease-in-out;
`;

export const Nav = styled.nav`
	position: relative;
	display: flex;
	gap: 0 2em;
	margin: 30px 30px 30px auto;
	a {
		color: black;
		text-decoration: none;
		font-size: 20px;
		&:hover {
			color: green;
		}
	}
`;

export const Paragraph = styled.p`
	max-width: 900px;
	font-size: 32px;
	position: relative;
	margin: 17vh;
`;

export const Img = styled.img`
	width: 25em;
`;

export const Section = styled.div`
	height: 80vh;
	position: relative;
	overflow: hidden;
	padding: 10em 0;
	color: white;

	background-color: black;
`;
