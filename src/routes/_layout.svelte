<script>
	import Nav from '../components/Nav.svelte';
	import Button from '../components/Button.svelte';

	export let segment;

	export const handler = () => {
		alert('erer');
	}
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>
<Button text='Test' onClick={handler}/>

<main>
	<slot></slot>
</main>