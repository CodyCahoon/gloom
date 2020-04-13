<script>
  export let text = 'Button Text is missing'
  export let type = 'button'
  export let onClick = () => {}
</script>

<style>
  button {
    font-family: Gloom;
    background-image: linear-gradient(to top, #70573b 0%, #221c12 100%);
    color: rgba(255, 255, 255, 0.85);
    font-size: 24px;
    border: none;
    padding: 7px 18px;
    border-radius: 2px;
    transition: all 150ms;
    cursor: pointer;
    position: relative;
  }

  button::after {
    position: absolute;
    content: '';
    top: 1px;
    left: 1px;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    border: 2px solid transparent;
    transition: all 150ms;
  }

  button:hover {
    color: white;
  }

  button:focus {
    outline: none;
  }

  button:focus::after,
  button:hover::after {
    border-color: white;
  }
</style>

<button {type} on:click={onClick}>{text}</button>
