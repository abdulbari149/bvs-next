import Services from "@/container/services";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/about.css";
import "@/css/slider.css";
import "@/css/services.css";

export const metadata: Metadata = generateSeo("BVS | Services");

const Page = () => <Services />;

export default Page;
