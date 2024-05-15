import Hero from "@/components/hero";
import PageBreak from "@/components/page-break";

const Blog = () => {
	return (
		<>
			<Hero title="Blog Posts" />
			<div id="blog-posts" style={{ marginTop: "5%" }} />
			<PageBreak />
		</>
	);
};

export default Blog;
