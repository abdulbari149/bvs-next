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
