<script>
	import Canvas from "../components/Canvas.svelte"

	const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "white", "black"]
	let selected = $state(colors[0])
	let size = $state(10)
	let showMenu = $state(true)

	$inspect(size)
	$inspect(showMenu)
	$inspect(selected)

	const toggleModal = () => {
		showMenu = !showMenu
	}
</script>

<h1>Welcome to SvelteKit</h1>
<div class="fixed left-0 top-0 h-full w-full">
	<Canvas {size} color={selected} />
	<!-- Menu -->
	{#if showMenu}
		<div
			role="presentation"
			onclick={(ev) => ev.target === ev.currentTarget && toggleModal()}
			onkeydown={(ev) => ev.key === "Escape" && toggleModal()}
			class="fixed left-0 top-0 flex h-full w-full items-center justify-center backdrop-blur-xl"
		>
			<div class="relative w-[calc(100%)] max-w-[28rem] rounded-md bg-gray-800 px-2 py-4">
				<div class="grid grid-cols-9 gap-1">
					{#each colors as color}
						<button
							onclick={() => (selected = color)}
							aria-label={color}
							aria-current={color === selected}
							style="--color: {color}"
							class="aspect-[1] rounded-[50%] border-2 border-solid bg-[var(--color,_#fff)] aria-[current=true]:border-lime-400"
						></button>
					{/each}
				</div>
				<label class="mt-4 flex w-full items-center gap-4">
					min
					<input bind:value={size} class="flex-1" type="range" min="0" max="50" />
					max
				</label>
			</div>
		</div>
	{/if}
	<div class="absolute left-0 top-0">
		<button
			onclick={() => (showMenu = !showMenu)}
			class="rounded-md bg-lime-500 px-4 py-2 text-black"
		>
			{showMenu ? "Close" : "Open"}</button
		>
	</div>
</div>
