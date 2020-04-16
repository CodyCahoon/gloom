<script>
  export let text = 'Button Text is missing';
  export let type = 'button';
  export let onClick = () => {};
</script>

<style>
  button {
    font-family: Gloom;
    border: 1px solid #222;
    color: #222;
    font-size: 20px;
    padding: 5px 12px;
    border-radius: 4px;
    transition: all 150ms;
    cursor: pointer;
    position: relative;
    min-width: 80px;
  }

  button:hover {
    color: black;
  }

  button:focus {
    outline: none;
  }

  button:focus,
  button:hover {
    border-color: black;
    transform: translateY(-2px);
  }
</style>

<button {type} on:click={onClick}>{text}</button>
