<script lang="ts">
	import ConversationTile from './ConversationTile.svelte';
</script>

<header>
	<h1>App Name</h1>
</header>
<ConversationTile names={['Harsh', 'Rohila']} />

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--primary);
		color: var(--white);
	}
</style>