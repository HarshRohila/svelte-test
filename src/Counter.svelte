<script lang="ts">
	export let initialValue = 2;
	let count = initialValue;
	
	function handleClick() {
		count += 1;
	}
</script>

<h1>{count}</h1>
<button on:click={handleClick}>Increment</button>

<style>
	button {
		background-color: blue;
		color: white;
	}
</style>