import BlogSingle from "@/container/blog-single";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/about.css";
import "@/css/slider.css";

export const metadata: Metadata = generateSeo("BVS | Blog Posts");

const Page = () => <BlogSingle />;

export default Page;
