/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const Hero: React.FC<{ title: string }> = ({ title }) => {
	return (
		<div style={{ width: "100%", height: "75vh" }}>
			<img
				loading="lazy"
				src="/img/pageTopper.png"
				className="top-bg"
				alt="image"
			/>
			<h1 className="header-text">{title}</h1>
		</div>
	);
};

export default Hero;
