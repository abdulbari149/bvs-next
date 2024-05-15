"use client";

import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useRef } from "react";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type Props = DetailedHTMLProps<
	ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
>;

const ParallaxImage: React.FC<Props> = (props) => {
	const imgRef = useRef<HTMLImageElement | null>(null);

	const attachParallaxEffect = async () => {
		if (!imgRef.current) return;

		const { default: SimpleParallax } = await import("simple-parallax-js");

		new SimpleParallax(imgRef.current, {
			scale: 1.4,
			delay: 0.6,
			transition: "cubic-bezier(0,0,0,1)",
			customWrapper: ".steps-pane",
		});
	};

	useEffect(() => {
		if (typeof window === "undefined") return;
		attachParallaxEffect();
	}, []);

	return <img ref={imgRef} {...props} />;
};

export default ParallaxImage;
