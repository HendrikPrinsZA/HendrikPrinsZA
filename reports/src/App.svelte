<script>
	import Scrolly from "./lib/Scrolly.svelte";
	let value;
	const steps = ["😐", "😀", "🤩"];
</script>

<div class="info">
	<h1>Svelte Scrollytelling Component</h1>
	<p>
		Activates a child element based on which one is most in-view. Scroll.
	</p>
	<mark>Active: {value}</mark>
</div>

<section>
	<div class="spacer" />

	<Scrolly bind:value>
		{#each steps as text, i}
		<div class="step" class:active={value === i}>
			<p>{text}</p>
		</div>
		{/each}
	</Scrolly>
	
	<div class="spacer" />
</section>

<style>
	.info {
		margin-top: 2em;
	}
	mark {
		padding: 0.5em;
		position: fixed;
		top: 0;
		right: 0;
	}
	
	section {
		width: 20em;
		margin: 0 auto;
	}
	
	.spacer {
		height: 125vh;
	}

	.step {
		height: 80vh;
		background: #ddd;
		margin-top: 1em;
		text-align: center;
		transition: background 100ms;
	}
	
	.step p {
		font-size: 4em;
	}
	
	.step.active {
		background: #aaa;
	}
</style>
