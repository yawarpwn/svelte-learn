import * as db from "$lib/server/database"
import { fail } from "@sveltejs/kit"

export function load({ params, cookies }) {
	let id = cookies.get("userId")
	if (!id) {
		id = crypto.randomUUID()
		cookies.set("userId", id, {
			path: "/"
		})
	}

	const todos = db.getTodos(id)
	return {
		todos
	}
}

export const actions = {
	create: async ({ cookies, request }) => {
		const formData = await request.formData()
		const userId = cookies.get("userId")
		const description = formData.get("description")
		try {
			db.createTodo(userId, description)
		} catch (error) {
			return fail(422, {
				error: error.message,
				description
			})
		}
	},
	delete: async ({ cookies, request }) => {
		const formData = await request.formData()
		const id = formData.get("id")
		const userId = cookies.get("userId")
		db.deleteTodo(userId, id)
	}
}
