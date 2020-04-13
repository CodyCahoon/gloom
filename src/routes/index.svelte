<script>
  import AttackModifiers from '../components/AttackModifiers.svelte'
  import Characters from '../components/Characters.svelte'
  import Perks from '../components/Perks.svelte'
</script>

<style>
  main {
    display: flex;
  }

  .panel {
    background-color: #f2f2f2;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    padding: 20px;
    margin-right: 20px;
    border-radius: 2px;
    flex-grow: 1;
    width: calc(33% - 20px);
  }

  .panel__title {
    color: #222;
    font-size: 14px;
    text-transform: uppercase;
    margin: 0 0 30px 0;
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>Gloomhaven</title>
</svelte:head>

<main>

  <!-- Character Selection -->
  <section class="panel">
    <h2 class="panel__title">Character</h2>
    <Characters />
  </section>

  <!-- Perk Selection -->
  <section class="panel">
    <h2 class="panel__title">Perks</h2>
    <Perks />
  </section>

  <section class="panel">
    <h2 class="panel__title">Attack Modifiers</h2>
    <AttackModifiers />
  </section>
</main>
