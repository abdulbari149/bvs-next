import About from "@/container/about";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/about.css";
import "@/css/slider.css";

export const metadata: Metadata = generateSeo("BVS | About");

const Page = () => {
	return <About />;
};

export default Page;
