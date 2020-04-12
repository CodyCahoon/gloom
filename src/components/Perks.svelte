<script>
    import { availablePerks } from '../stores.js';
    import Perk from './Perk.svelte';
</script>

{#each $availablePerks as perk}
    <Perk perk={perk}/>
{/each}