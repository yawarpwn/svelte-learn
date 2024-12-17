const db = new Map()

/**
 * @param {*} userId
 * @returns {Array<{id: string, description: string, done: boolean}>}
 */
export function getTodos(userId) {
	if (!db.get(userId)) {
		db.set(userId, [
			{
				id: crypto.randomUUID(),
				description: "Learn Svelte",
				done: false
			}
		])
	}

	return db.get(userId)
}

/**
 * @param {string}   userId
 * @param {string}  description
 */
export function createTodo(userId, description) {
	const todos = db.get(userId)

	if (description === "") {
		throw new Error("Todo description cannot be empty")
	}

	if (todos.find((t) => t.description === description)) {
		throw new Error("Todo description already exists")
	}

	todos.push({
		id: crypto.randomUUID(),
		description,
		done: false
	})
}

/**
 * @param {string}   userId
 * @param {string}  todoId
 */
export function deleteTodo(userId, todoId) {
	const todos = db.get(userId)
	const index = todos.findIndex((todo) => todo.id === todoId)

	if (index !== -1) {
		todos.splice(index, 1)
	}
}
