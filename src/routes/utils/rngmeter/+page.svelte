<script lang="ts">
	import Divider from '../../../components/Divider.svelte';
	import Dropdown from '../../../components/Dropdown.svelte';

	let getProbAfterNData: {
		runs: number;
		maxRuns: number;
		startPercent: number;
		magicFind: number;
		result: number | null;
	} = {
		runs: 0,
		maxRuns: 0,
		startPercent: 0,
		magicFind: 0,
		result: null
	};

	const getProbAfterN = async () => {
		const res = await fetch('/api/rngmeter/calcAfterNRuns', {
			method: 'POST',
			body: JSON.stringify(getProbAfterNData)
		});

		const json = await res.json();

		console.log(json);

		getProbAfterNData.result = json.percent;
	};
</script>

<div class="h-full flex-col">
	<h1 class="text-5xl">RNG meter utilities</h1>

	<Divider />

	<form
		method="POST"
		on:submit|preventDefault={getProbAfterN}
		class="flex-col inline-flex space-y-4"
	>
		<h2 class="text-3xl">Get probability after N runs</h2>

		<label>
			Runs
			<input class="form-item" type="number" name="runs" bind:value={getProbAfterNData.runs} />
		</label>

		<label>
			Max Runs
			<input
				class="form-item"
				type="number"
				name="maxRuns"
				bind:value={getProbAfterNData.maxRuns}
			/>
		</label>

		<label>
			Starting % (as a decimal)
			<input
				class="form-item"
				type="text"
				name="startPercent"
				bind:value={getProbAfterNData.startPercent}
			/>
		</label>

		<div class="-translate-x-2">
			<Dropdown title="Slayer" align="start" size="lg" hover={false}>
				<div class="pl-4 pb-4">
					<label>
						Magic Find (leave 0 if not doing slayer)
						<input
							class="form-item"
							type="number"
							name="magicFind"
							bind:value={getProbAfterNData.magicFind}
						/>
					</label>
				</div>
			</Dropdown>
		</div>

		<button type="submit" class="w-40 ring-1 ring-zinc-500 ring-inset rounded-md p-1">
			Submit
		</button>

		{#if getProbAfterNData.result !== null}
			<p>
				Result: {getProbAfterNData.result.toFixed(6)} or
				{(getProbAfterNData.result * 100).toFixed(3)}%
			</p>
		{/if}
	</form>
</div>
