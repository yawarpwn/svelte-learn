<script>
	let { data, children } = $props()
</script>

<div class="layout grid grid-cols-[1fr_14rem]">
	<main>
		{@render children()}
	</main>
	<aside>
		<h2>More posts</h2>
		<ul>
			{#each data.summaries as { slug, title }}
				<li><a href="/blog/{slug}">{title}</a></li>
			{/each}
		</ul>
	</aside>
</div>
