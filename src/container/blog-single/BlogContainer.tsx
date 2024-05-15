"use client";

import { useRouter } from "next/navigation";

const BlogContainer: React.FC<{
	children: React.ReactNode;
	blog: any;
	type: "right" | "left";
}> = ({ children, type, blog }) => {
	const { push } = useRouter();

	return (
		<div
			className={type === "left" ? "left-container1" : "photo-container"}
			style={{ cursor: "pointer" }}
			onClick={() => {
				push(`/blog-single?id=${blog.identifier}`);
			}}
		>
			{children}
		</div>
	);
};

export default BlogContainer;
