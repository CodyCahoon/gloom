<script>
  import { attackModifiers } from '../stores.js'

  export let perk

  const bracketRegex = /\[[\+-\d\w]+\]/gm

  const replaceWithIcon = match => {
    const icon = match.substring(1, match.length - 1).toLowerCase()
    return `<img class="perk__img" src="icons/${icon}.png" />`
  }

  const perkText = perk.text.replace(bracketRegex, replaceWithIcon)

  const onChange = event => {
    attackModifiers.handlePerk(perk, event.target.checked)
  }
</script>

<style>
  label {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] + span {
    color: #222;
    font-family: GloomText;
    font-size: 20px;
    transition: all 150ms;
  }

  :global(.perk__img) {
    width: 20px;
    margin-bottom: -4px;
    display: inline-block;
  }
</style>

<label>
  <input type="checkbox" on:change={onChange} />
  {#if perk.isDouble}
    <input type="checkbox" on:change={onChange} />
  {/if}
  <span>
    {@html perkText}
  </span>
</label>
