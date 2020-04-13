<script>
  import AttackModifiers from '../components/AttackModifiers.svelte'
  import Characters from '../components/Characters.svelte'
  import Perks from '../components/Perks.svelte'

  import Panel from '../components/core/Panel.svelte'
</script>

<style>
  main {
    display: flex;
  }
</style>

<svelte:head>
  <title>Gloomhaven</title>
</svelte:head>

<main>
  <!-- Character Selection -->
  <Panel title="Characters">
    <Characters />
  </Panel>

  <!-- Perk Selection -->
  <Panel title="Perks">
    <Perks />
  </Panel>

  <!-- Attack Modifiers -->
  <Panel title="Attack Modifiers">
    <AttackModifiers />
  </Panel>
</main>
