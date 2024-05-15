"use client";

import { DetailedHTMLProps, ImgHTMLAttributes, useEffect, useRef } from "react";
import SimpleParallax from "simple-parallax-js";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

type Props = DetailedHTMLProps<
	ImgHTMLAttributes<HTMLImageElement>,
	HTMLImageElement
>;

const ParallaxImage: React.FC<Props> = (props) => {
	const imgRef = useRef<HTMLImageElement | null>(null);

	useEffect(() => {
		if (!imgRef.current) return;

		new SimpleParallax(imgRef.current, {
			scale: 1.4,
			delay: 0.6,
			transition: "cubic-bezier(0,0,0,1)",
			customWrapper: ".steps-pane",
		});
	}, []);

	return <img ref={imgRef} {...props} />;
};

export default ParallaxImage;
