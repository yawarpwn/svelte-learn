<script>
	import "../app.css"
	let { children } = $props()
</script>

<nav>
	<a href="/">Home</a>
	<a href="/blog">Blog</a>
	<a href="/about">About</a>
</nav>
{@render children()}

<style>
	nav {
		background-color: indigo;

		a {
			color: blue;
		}
	}
</style>
