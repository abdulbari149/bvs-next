/* eslint-disable @next/next/no-img-element */
import { getBlogs } from "@/api/blog";
import { v4 } from "uuid";
import BlogContainer from "./BlogContainer";
import ParallaxImage from "@/components/parallax-image";

const getPosts = async () => {
	const data: any[] = await getBlogs();

	const posts = [...data.reverse()]
		.filter((item) => {
			return item.categories.includes("bvs") && item.published === true;
		})
		.map((item) => {
			const date = new Date(item.updatedAt);
			const formattedDate =
				date.getDate() +
				" " +
				date.toLocaleString("default", { month: "long" }) +
				" " +
				date.getFullYear();
			return {
				id: v4(),
				...item,
				date: formattedDate,
			};
		});

	return posts;
};

const BlogList = async () => {
	const posts = await getPosts();

	return (
		<div id="blog-posts" style={{ marginTop: "5%" }}>
			{posts.map((item) => {
				return (
					<div key={item.id} className="responsive-two-column-grid">
						<BlogContainer type="left" blog={item}>
							<h1
								className="hover-text about-hover"
								style={{ textAlign: "center" }}
							>
								{item.title}
							</h1>
							<h3 style={{ textAlign: "center" }}>{item.author}</h3>
							<h3 style={{ textAlign: "center" }}>{item.date}</h3>
							<h4 style={{ textAlign: "center", lineHeight: 1.75 }}>
								{item.clincher}
							</h4>
						</BlogContainer>
						<BlogContainer type="right" blog={item}>
							<ParallaxImage
								src={item.photo}
								style={{
									width: "100%",
									height: "50vh",
									objectFit: "cover",
								}}
								alt="image"
							/>
						</BlogContainer>
					</div>
				);
			})}
		</div>
	);
};

export default BlogList;
