<script lang="ts">
	import Dropdown from './Dropdown.svelte';

	type DropdownItem = {
		text: string;
		href: string;
	};

	export let title: string;
	export let items: DropdownItem[];

	let menuOpen = false;
</script>

<Dropdown {title} style="backgrounded">
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
</Dropdown>
