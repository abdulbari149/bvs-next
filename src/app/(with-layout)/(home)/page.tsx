import Home from "@/container/home";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/style-timeline.css";
import "@/css/slider.css";

export const metadata: Metadata = generateSeo("BVS | Home");

const Page = () => {
	return (
		<>
			<Home />
		</>
	);
};

export default Page;
