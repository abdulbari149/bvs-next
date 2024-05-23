"use client";

import { useRouter } from "next/navigation";

function fixedEncodeURIComponent(str: string) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return "%" + c.charCodeAt(0).toString(16);
	});
}

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
				push(`/blog/${fixedEncodeURIComponent(blog.identifier)}`);
			}}
		>
			{children}
		</div>
	);
};

export default BlogContainer;
