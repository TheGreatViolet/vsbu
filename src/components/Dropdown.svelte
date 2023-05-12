<script lang="ts">
	import { scale } from 'svelte/transition';

	type DropdownItem = {
		text: string;
		href: string;
	};

	export let title: string;
	export let items: DropdownItem[];

	let menuOpen = false;
</script>

<div class="relative inline-block text-left">
	<button
		type="button"
		class="inline-flex w-full justify-center gap-x-1.5 rounded-md
    bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-300
    shadow-sm hover:bg-zinc-800
    ease-in-out duration-150"
		id="menu-button"
		aria-expanded="true"
		aria-haspopup="true"
		on:click={() => (menuOpen = !menuOpen)}
	>
		{title}
		<svg
			class="-mr-1 h-5 w-5 text-gray-400"
			viewBox="0 0 20 20"
			fill="currentColor"
			aria-hidden="true"
		>
			<path
				fill-rule="evenodd"
				d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	{#if menuOpen}
		<div
			class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md
        bg-zinc-800 shadow-lg ring-1 ring-zinc-700 ring-opacity-5 focus:outline-none opacity-100"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
			transition:scale={{ duration: 150 }}
		>
			<div class="py-1" role="none">
				{#each items as item}
					<a
						href={item.href}
						class="block px-4 py-2 text-sm"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0"
						on:click={() => {
							menuOpen = false;
						}}>{item.text}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</div>
