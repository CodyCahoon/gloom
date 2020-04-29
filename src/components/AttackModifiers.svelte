<script>
  import { attackModifiers } from '../stores/index.js';
  import Button from './core/Button.svelte';

  const { available, drawn } = attackModifiers;

  const drawCard = () => {
    attackModifiers.draw();
  };
  const shuffleCards = () => {};

  const addCard = (card) => () => attackModifiers.add(card);
</script>

<Button text="Draw" onClick={drawCard} />
<Button text="Shuffle" onClick={shuffleCards} />
<Button text="+ Add Bless" onClick={addCard('bless')} />
<Button text="+ Scenario Effect (-1)" onClick={addCard('-1scenario')} />

<ul>
  <label for="">available</label>
  {#each $available as ac}
    <li>{ac}</li>
  {/each}
</ul>

<ul>
  <label for="">drawn</label>
  {#each $drawn as ac}
    <li>{ac}</li>
  {/each}
</ul>
