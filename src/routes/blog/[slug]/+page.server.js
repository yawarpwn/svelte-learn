import { error } from "@sveltejs/kit"
import { posts } from "../../../data"
import { msg } from "$lib"

export function load({ params, setHeaders, cookies }) {
	const visited = cookies.get("visited")

	setHeaders({
		"Content-Type": "text/html"
	})
	const post = posts.find((post) => post.slug === params.slug)

	if (!post) error(404)

	return {
		post
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		console.log(request)
	}
}
