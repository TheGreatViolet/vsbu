<script lang="ts">
	import { scale } from 'svelte/transition';

	type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	type Style = 'backgrounded' | 'none';
	type Alignment = 'start' | 'center' | 'end';

	export let title: string;
	export let size: Size = 'md';
	export let style: Style = 'none';
	export let align: Alignment = 'center';
	export let hover: boolean = true;

	let menuOpen = false;
</script>

<div class="relative inline-block text-left {style == 'none' ? 'w-full' : ''}">
	<button
		type="button"
		class="inline-flex w-full align-{align} items-{align} justify-{align} gap-x-1.5 rounded-md
    bg-zinc-900 px-3 py-2 text-sm font-semibold text-zinc-300
    shadow-sm {hover ? 'hover:bg-zinc-800' : ''}
    ease-in-out duration-150"
		id="menu-button"
		aria-expanded="true"
		aria-haspopup="true"
		on:click={() => (menuOpen = !menuOpen)}
	>
		<p class="text-{size}">{title}</p>
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
		{#if style === 'backgrounded'}
			<div
				class="absolute left-0 z-10 mt-2 w-fit whitespace-nowrap origin-top-left rounded-md
	        bg-zinc-800 shadow-lg ring-1 ring-zinc-700 ring-opacity-5 focus:outline-none opacity-100"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
				transition:scale={{ duration: 150 }}
			>
				<slot />
			</div>
		{:else if style === 'none'}
			<div
				class="left-0 mt-2 w-full h-fit whitespace-nowrap"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabindex="-1"
				transition:scale={{ duration: 150 }}
			>
				<slot />
			</div>
		{/if}
	{/if}
</div>
