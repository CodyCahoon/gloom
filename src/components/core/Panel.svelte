<script>
  export let title
</script>

<style>
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

<section class="panel">
  <h1 class="panel__title">{title}</h1>
  <slot />
</section>
