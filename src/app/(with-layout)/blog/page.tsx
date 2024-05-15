import Blog from "@/container/blog";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/about.css";
import "@/css/slider.css";

export const metadata: Metadata = generateSeo("BVS | Blog Posts");

const Page = () => {
	return <Blog />;
};

export default Page;
