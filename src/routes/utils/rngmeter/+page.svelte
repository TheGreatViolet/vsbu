<script lang="ts">
	let getProbAfterNData: {
		runs: number;
		maxRuns: number;
		startPercent: number;
		result: number | null;
	} = {
		runs: 0,
		maxRuns: 0,
		startPercent: 0,
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

<h1>RNG meter utilities</h1>

<form method="POST" on:submit|preventDefault={getProbAfterN}>
	<h2>Get probability after N runs</h2>

	<label>
		Runs
		<input type="number" name="runs" bind:value={getProbAfterNData.runs} />
	</label>

	<label>
		Max Runs
		<input type="number" name="maxRuns" bind:value={getProbAfterNData.maxRuns} />
	</label>

	<label>
		Starting % (as a decimal)
		<input name="startPercent" bind:value={getProbAfterNData.startPercent} />
	</label>

	<button type="submit">Submit</button>
	<br />
	{#if getProbAfterNData.result !== null}
		<p>
			Result: {getProbAfterNData.result.toFixed(6)} or
			{(getProbAfterNData.result * 100).toFixed(3)}%
		</p>
	{/if}
</form>
