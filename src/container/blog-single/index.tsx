/* eslint-disable @next/next/no-img-element */
import { BlogDetail as BlogDetailType } from "@/api/blog";
import PageBreak from "@/components/page-break";
import React from "react";

const BlogSingle: React.FC<{ blog: BlogDetailType }> = ({ blog }) => {
	return (
		<div id="blog-posts">
			<div style={{ width: "100%", height: "75vh" }}>
				<img src={`${blog.photo}`} className="top-bg" alt="image" />
				<h1 className="header-text">{blog.title}</h1>
			</div>
			<div style={{ padding: "5% 15% 0" }}>
				<h5 style={{ padding: "2% 0 0", textAlign: "center" }}>
					{blog.author} | {blog.date}{" "}
				</h5>
				<PageBreak />
				<div
					id="the-text"
					dangerouslySetInnerHTML={{
						__html: blog.desc,
					}}
				/>
			</div>
		</div>
	);
};

export default BlogSingle;
