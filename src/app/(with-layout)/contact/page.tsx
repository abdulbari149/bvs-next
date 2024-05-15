import { generateSeo } from "@/utils/seo";
import { Metadata } from "next";
import ContactUs from "@/container/contact-us";

import "@/css/about.css";
import "@/css/slider.css";
import "@/css/style.css";
import "@/css/services.css";
import "@/css/contact.css";

export const metadata: Metadata = generateSeo("BVS | Contact");

const Page = () => <ContactUs />;

export default Page;
