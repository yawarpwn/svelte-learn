<script>
	let { data } = $props()
	import { msg } from "$lib"
</script>

<div>
	<h1>
		{msg}
	</h1>
	{data.post.title}
	<form method="POST">
		<input type="text" placeholder="information" name="description" />
		<button type="submit">Submit</button>
	</form>
</div>
