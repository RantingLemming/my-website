import React from "react";

import "./HomePage.css";

export const HomePage = () => {
	return (
		<main className='home-page'>
			<section>
				<div className='welcome-message'>
					<div className='letter'>W</div>
					<div className='letter'>E</div>
					<div className='letter'>L</div>
					<div className='letter'>C</div>
					<div
						className='letter'
						style={{
							transform: "translate(4rem,-2rem) rotate(60deg)",
						}}
					>
						O
					</div>
					<div
						className='letter'
						style={{
							transform: "translate(6rem,2rem) rotate(45deg)",
						}}
					>
						M
					</div>
					<div
						className='letter'
						style={{
							transform: "translate(6rem,12rem) rotate(60deg)",
						}}
					>
						E
					</div>
				</div>
				<div>
					<p>You gorgeous lemming.</p>
					<br />
					<p>This is my website.</p>
					<p>It's a bit weird.</p>
					<br />
					<p>Intentionally, often.</p>
					<p>Unintentionally, more often.</p>
				</div>
			</section>
			<section>
				<p>This website can be summarized as such:</p>
				<ul>
					<li>Home Page (YOU ARE HERE)</li>
					<li>Levels</li>
					<li>Journal</li>
					<li>Prototypes</li>
				</ul>
			</section>
		</main>
	);
};
