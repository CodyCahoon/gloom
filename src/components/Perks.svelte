<script>
  import { availablePerks, character } from '../stores.js';
  import Perk from './Perk.svelte';
</script>

{#each $availablePerks as perk, i ($character + i)}
  <Perk {perk} />
{/each}
