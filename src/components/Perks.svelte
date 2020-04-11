<script>
    import { availablePerks, character } from '../stores.js';
    import Perk from './Perk.svelte';
    
    let perks = [];
    availablePerks.subscribe(p => {
        perks = p;
    });
</script>

<style>
   .perks {
       min-width: 240px;
   }
</style>

<section class="perks panel">
    <h2 class="panel__title">Perks</h2>
    {#each perks as perk}
        <Perk perk={perk}/>
    {/each}
</section>