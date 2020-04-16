<script>
  import { attackModifiers } from '../stores/index.js';
  import Button from './core/Button.svelte';

  const { available, drawn } = attackModifiers;

  const onDraw = () => {
    attackModifiers.draw();
  };
  const onShuffle = () => {};
</script>

<Button text="Draw" onClick={onDraw} />
<Button text="Shuffle" onClick={onShuffle} />

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
