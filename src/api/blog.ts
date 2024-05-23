export async function getBlogs() {
	try {
		const BLOG_URL = "https://azark-blog-backend.onrender.com/api/posts";

		const res = await fetch(BLOG_URL, {
      cache: 'no-store'
    });
		if (!res.ok) {
			throw new Error(`${res.status} : ${res.statusText}`);
		}

		const json = await res.json();
		return json;
	} catch (err) {
		console.error((err as Error).message);

    return []
	}
}

export const getBlogById = async (id: string) => {
	try {
		const res = await fetch(
			`https://azark-blog-backend.onrender.com/api/posts/title/${id}`
		);
		if (!res.ok) {
			throw new Error(`${res.status} : ${res.statusText}`);
		}

		const item = await res.json();

		if (!item.categories.includes("bvs")) {
			throw new Error("Blog post not found");
		}

		const date = new Date(item.updatedAt);
		const formattedDate =
			date.getDate() +
			" " +
			date.toLocaleString("default", { month: "long" }) +
			" " +
			date.getFullYear();

		return {
			photo: item.photo as string,
			title: item.title as string,
			author: item.author as string,
			date: formattedDate,
			desc: item.desc as string,
			keywords: item.keywords as string[],
		};
	} catch (err) {
		if (err instanceof Error) {
			console.error(err.message);
			throw err;
		}
		throw new Error("An error occurred");
	}
};

export type BlogDetail = Awaited<ReturnType<typeof getBlogById>>