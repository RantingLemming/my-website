import * as React from "react";
import { Link, Outlet } from "react-router-dom";

import LevelsSVG from "../assets/svgs/levels.svg";
import LatteSVG from "../assets/svgs/latte.svg";
import "./UI.css";
export interface IUIProps {}

// UI component is a wrapper around all pages in this website.
export const UI = ({}: IUIProps) => {
	return (
		<div className='ui'>
			{/* <LevelsSVG /> */}
			{/* <LatteSVG></LatteSVG> */}
			<header className='header'>
				<div className='logo'>
					<Link to='/'>
						<svg
							className='lune'
							width='2.5rem'
							height='2.5rem'
							viewBox='0 0 100 100'
						>
							<circle
								cx='50'
								cy='50'
								r='50'
								className='lune-land'
							/>
							<circle
								cx='-50'
								cy='-50'
								r='48'
								className='lune-shader'
							/>
						</svg>
					</Link>
					<span>{"<--- Home :)"}</span>
				</div>
				<nav className='navigation'>
					<Link to='/levels' className='navigation-levels'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
						>
							<path
								fill='black'
								d='M232.5 5.167C247.4-1.722 264.6-1.722 279.5 5.167L498.1 106.2C506.6 110.1 512 118.6 512 127.1C512 137.3 506.6 145.8 498.1 149.8L279.5 250.8C264.6 257.7 247.4 257.7 232.5 250.8L13.93 149.8C5.438 145.8 0 137.3 0 127.1C0 118.6 5.437 110.1 13.93 106.2L232.5 5.167zM498.1 362.2C506.6 366.1 512 374.6 512 383.1C512 393.3 506.6 401.8 498.1 405.8L279.5 506.8C264.6 513.7 247.4 513.7 232.5 506.8L13.93 405.8C5.438 401.8 0 393.3 0 383.1C0 374.6 5.437 366.1 13.93 362.2L67.13 337.6L219.1 407.8C242.5 418.7 269.5 418.7 292.9 407.8L444.9 337.6L498.1 362.2z'
							/>
							<path
								fill='white'
								d='M292.9 279.8L444.9 209.6L498.1 234.2C506.6 238.1 512 246.6 512 255.1C512 265.3 506.6 273.8 498.1 277.8L279.5 378.8C264.6 385.7 247.4 385.7 232.5 378.8L13.93 277.8C5.438 273.8 0 265.3 0 255.1C0 246.6 5.437 238.1 13.93 234.2L67.13 209.6L219.1 279.8C242.5 290.7 269.5 290.7 292.9 279.8V279.8z'
							/>
						</svg>
						<span
							style={{
								color: "white",
								// textShadow: "2px 2px black",
								textDecoration: "underline",
							}}
						>
							L
						</span>
						<span
							style={{
								color: "black",
								// textShadow: "2px 2px white",
								textDecoration: "underline",
							}}
						>
							E
						</span>
						<span
							style={{
								color: "white",
								// textShadow: "2px 2px black",
								textDecoration: "underline",
							}}
						>
							V
						</span>
						<span
							style={{
								color: "black",
								// textShadow: "2px 2px white",
								textDecoration: "underline",
							}}
						>
							E
						</span>
						<span
							style={{
								color: "white",
								// textShadow: "2px 2px black",
								textDecoration: "underline",
							}}
						>
							L
						</span>
						<span
							style={{
								color: "black",
								// textShadow: "2px 2px white",
								textDecoration: "underline",
							}}
						>
							S
						</span>
					</Link>
					<Link to='/journal' className='navigation-journal'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 512 512'
							stroke='black'
							strokeWidth={16}
						>
							<path
								fill='gray'
								d='M192 0v512H128c-35.35 0-64-28.65-64-64v-40H24C10.75 408 0 397.3 0 384c0-13.26 10.75-24 24-24H64v-80H24C10.75 280 0 269.3 0 256c0-13.26 10.75-24 24-24H64v-80H24C10.75 152 0 141.3 0 128c0-13.26 10.75-24 24-24H64V64c0-35.35 28.65-64 64-64H192z'
							/>
							<path
								fill='white'
								d='M416 0H192v512h224c35.35 0 64-28.65 64-64V64C480 28.65 451.3 0 416 0z'
							/>
						</svg>
						<span>Journal</span>
					</Link>
					<Link to='/prototypes' className='navigation-prototypes'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 576 512'
						>
							<path
								fill='black'
								d='M288 457.5L174.5 507.3C160.2 513.7 143.8 513.7 129.5 507.3L33.46 465.1C13.13 456.2 0 436.1 0 413.9V294.7C0 271.5 14.39 250.6 36.15 242.4L132.1 205.1C133.4 205.5 134.7 205.1 136 204.7V92.52C136 69.25 150.4 48.41 172.1 40.16L268.1 3.76C280.9-1.089 295.1-1.089 307.9 3.76L403.9 40.16C425.6 48.41 440 69.25 440 92.52V204.7C441.3 205.1 442.6 205.5 443.9 205.1L539.9 242.4C561.6 250.6 576 271.5 576 294.7V413.9C576 436.1 562.9 456.2 542.5 465.1L446.5 507.3C432.2 513.7 415.8 513.7 401.5 507.3L288 457.5zM290.8 48.64C289 47.95 286.1 47.95 285.2 48.64L206.8 78.35L287.1 109.5L369.2 78.35L290.8 48.64zM264 240.9V151.7L184 121V210.6L264 240.9zM312 240.9L392 210.6V121L312 151.7V240.9zM70.81 280.6L152 311.7L233.2 280.6L154.8 250.9C153 250.2 150.1 250.2 149.2 250.9L70.81 280.6zM176 454.3L256 419.1V323.2L176 353.9V454.3zM128 353.9L48 323.2V413.9C48 417.1 49.88 419.9 52.78 421.2L128 454.3V353.9zM342.8 280.6L424 311.7L505.2 280.6L426.8 250.9C425 250.2 422.1 250.2 421.2 250.9L342.8 280.6zM523.2 421.2C526.1 419.9 528 417.1 528 413.9V323.2L448 353.9V454.3L523.2 421.2zM320 323.2V419.1L400 454.3V353.9L320 323.2z'
							/>
							<path
								fill='springgreen'
								d='M264 151.7V240.9L184 210.6V121L264 151.7zM392 210.6L312 240.9V151.7L392 121V210.6zM256 419.1L176 454.3V353.9L256 323.2V419.1zM48 323.2L128 353.9V454.3L52.78 421.2C49.88 419.9 48 417.1 48 413.9V323.2zM528 323.2V413.9C528 417.1 526.1 419.9 523.2 421.2L448 454.3V353.9L528 323.2zM320 419.1V323.2L400 353.9V454.3L320 419.1z'
							/>
						</svg>
						<span>Prototypes</span>
					</Link>
				</nav>
			</header>
			{/* Outlet = PageComponent */}
			<Outlet />
			<footer className='footer'>
				<h1>FOOTER</h1>
			</footer>
		</div>
	);
};
