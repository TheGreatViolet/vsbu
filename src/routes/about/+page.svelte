<script>
	import Divider from '../../components/Divider.svelte';
	import Dropdown from '../../components/Dropdown.svelte';
</script>

<div class="w-full h-full flex-col place-content-center text-center space-y-2">
	<p class="text-5xl">Violet's Skyblock Utilities</p>

	<Divider />

	<div class="flex-col place-content-center text-center space-y-2" id="about-info">
		<p class="text-3xl">Developed and maintained by Violet Hayes</p>
		<p class="text-xl">Contact on Discord at <b>Violet#0695</b></p>
		<p class="text-lg">Or by email at <b>ampc11234@gmail.com</b></p>
	</div>

	<Divider />

	<Dropdown title="Tools used" size="xl">
		<div class="flex-col w-full place-content-center text-center px-4">
			<p class="text-3xl">Website Things</p>
			<p class="text-xl">Svelte, TypeScript, TailwindCSS, Vite</p>

			<Divider />

			<p class="text-3xl">Testing</p>
			<p class="text-xl">Vitest, Playwright</p>

			<Divider />

			<p class="text-3xl">Hosting</p>
			<p class="text-xl">Vercel, GitHub</p>
		</div>
	</Dropdown>

	<Divider />

	<div class="flex-col place-content-center text-center space-y-2" id="links">
		<p class="text-3xl">Links</p>
		<div class="flex-row justify-evenly">
			<a href="https://github.com/TheGreatViolet/vsbu" class="text-xl underline decoration-dotted">
				GitHub
			</a>
		</div>
	</div>
</div>
