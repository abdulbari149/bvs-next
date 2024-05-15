import PrivacyPolicy from "@/container/privacy-policy";
import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import "@/css/style.css";
import "@/css/privacy-policy.css"

export const metadata: Metadata = generateSeo("BVS | Privacy Policy");

const Page = () => {
	return <PrivacyPolicy />;
};

export default Page;
