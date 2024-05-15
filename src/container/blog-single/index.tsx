import Hero from "@/components/hero";
import PageBreak from "@/components/page-break";
import dynamic from "next/dynamic";

const BlogList = dynamic(() => import("./BlogList"));

const BlogSingle = () => {
	return (
		<>
			<Hero title="Blog Posts" />
			<BlogList />
			<PageBreak />
		</>
	);
};

export default BlogSingle;
