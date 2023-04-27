<script lang="ts">
	import '../app.css';
	import Dropdown from '../components/Dropdown.svelte';
</script>

<body class="text-stone-300 h-screen w-screen bg-zinc-900 flex-col">
	<nav
		class="sticky top-0 bg-zinc-900 bg-blend-overlay w-full h-14
		border-b outline-offset-1 border-zinc-800
		flex justify-start space-x-6 items-center p-4"
	>
		<h1 class="font-bold text-xl">VSBU</h1>

		<Dropdown
			title="Utilities"
			items={[
				{
					text: 'RNG Meter',
					href: '/utils/rngmeter'
				}
			]}
		/>
	</nav>

	<main class="p-4">
		<slot />
	</main>
</body>
