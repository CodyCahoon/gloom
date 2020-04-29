<script>
  import { attackModifiers } from '../stores/index.js';
  import Button from './core/Button.svelte';

  const { available, drawn } = attackModifiers;

  const drawCard = () => {
    attackModifiers.draw();
  };
  const shuffleCards = () => {};

  const addBless = () => {
    attackModifiers.add('bless');
  };
</script>

<Button text="Draw" onClick={drawCard} />
<Button text="Shuffle" onClick={shuffleCards} />
<Button text="+ Add Bless" onClick={addBless} />

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
