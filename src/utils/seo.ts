import { Metadata } from "next";

export const generateSeo = (
	title: string,
	options: { keywords?: string[] } = {}
) => {
	return {
		title,
		description:
			"We are a multidisciplinary tech-enabled project management service, that bridges the gaps between the silos of property management and NYC municipal agencies.",
		keywords: [
			"BVS",
			"Violations",
			"Expediters",
			"Design",
			"Solutions",
			"Resolution",
			...(options?.keywords ?? [])
		],
		authors: { name: "Azark Inc" },
		alternates: { canonical: "https://bvs.nyc/" },
		manifest: "/site.webmanifest",
		icons: [
			{
				type: "image/x-icon",
				url: "/favicon.ico",
			},
			{
				type: "apple-touch-icon",
				sizes: "180x180",
				url: "/apple-touch-icon.png",
			},
			{
				type: "image/png",
				sizes: "32x32",
				url: "/favicon-32x32.png",
			},
			{
				type: "image/png",
				sizes: "16x16",
				url: "/favicon-16x16.png",
			},
			{
				rel: "mask-icon",
				color: "#AA182C",
				url: "/safari-pinned-tab.svg",
			},
		],
		other: {
			"msapplication-TileColor": "#da532c",
			themeColor: "#ffffff",
		},
	} as Metadata;
};
