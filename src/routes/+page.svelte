<script>
	const { data, form } = $props()
	console.log(form)
</script>

<h1>Todos</h1>
{#if form?.error}
	<div>{form.error}</div>
{/if}
<form method="POST" action="?/create">
	<input class="text-black" value={form?.description ?? ""} type="text" name="description" />
	<button>Add Todo</button>
</form>
<ul>
	{#each data.todos as todo}
		<li class="flex items-center gap-4">
			{todo.description}
			<form action="?/delete" method="POST">
				<input type="hidden" name="id" value={todo.id} />
				<button class="bg-red-500 text-white">borrar</button>
			</form>
		</li>
	{/each}
</ul>
