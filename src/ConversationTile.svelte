<script lang="ts">
	export let names: string[];

	$: title = names.join(', ');
</script>

<h3>{title}</h3>