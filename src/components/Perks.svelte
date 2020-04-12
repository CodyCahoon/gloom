<script>
  import { availablePerks } from '../stores.js'
  import Perk from './Perk.svelte'

  const test = ''
</script>

{#each $availablePerks as perk}
  <Perk {perk} />
{/each}
