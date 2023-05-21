<script lang="ts">
	import '../app.css';
	import NavbarDropdown from '../components/NavbarDropdown.svelte';
</script>

<body class="text-stone-300 h-screen w-screen bg-zinc-900 flex flex-col justify-evenly">
	<nav
		class="sticky top-0 bg-zinc-900 bg-blend-overlay w-full h-14
		border-b outline-offset-1 border-zinc-800
		flex justify-start space-x-6 items-center p-4"
	>
		<a href="/" class="font-bold text-xl">VSBU</a>

		<NavbarDropdown
			title="Utilities"
			items={[
				{
					text: 'RNG Meter',
					href: '/utils/rngmeter'
				}
			]}
		/>
	</nav>

	<main class="p-4 overflow-y-visible h-fit">
		<slot />
	</main>

	<div class="flex flex-1" />

	<footer
		class="w-full h-fit p-4
		flex flex-col align-middle content-center justify-center
		space-y-1 text-center "
	>
		<div class="flex-row">
			<a href="/about" class="decoration-dotted underline">About</a>
		</div>

		<p>
			Copyright &copy; 2023 Violet Hayes. Licensed under
			<a
				href="https://github.com/TheGreatViolet/vsbu/blob/main/LICENSE"
				class="decoration-dotted underline"
				target="_blank"
				rel="noreferrer">MIT License</a
			>.
		</p>
	</footer>
</body>
