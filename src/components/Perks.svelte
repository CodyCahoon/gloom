<script>
    import { character } from '../stores.js';
    
    let characterValue;

	const unsubscribe = character.subscribe(value => {
		characterValue = value;
	});
</script>

<style>
   .perks {
       min-width: 240px;
   }
</style>

<section class="perks panel">
    <h2 class="panel__title">Perks</h2>
    <main>Perks for: {characterValue} go here</main>
</section>