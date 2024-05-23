import Hero from "@/components/hero";
import PageBreak from "@/components/page-break";
import BlogList from "./BlogList";

const Blog = () => {
	return (
		<>
			<Hero title="Blog Posts" />
			{/* <div id="blog-posts" style={{ marginTop: "5%" }} /> */}
			<BlogList />
			<PageBreak />
		</>
	);
};

export default Blog;
