<svelte:head>
  <title>zootopia</title>
</svelte:head>

<div class="wrap">
  <ul class="script">
    {#each zootopiaScript as item, index}
    <li class="script__line">
      {#if 
        zootopiaScript[index - 1]?.name !== item.name
      }
      <span class="line__name">{item.name}</span>
      {/if}
      <p class="line__text">{item.line}</p>
    </li>
    {/each}
  </ul>
  <button on:click={() => movePage(1)}>1</button>
  <button on:click={() => movePage(2)}>2</button>
</div>

<script>
  
  import { getScript } from "../../service/zootopia";

  let zootopiaScript = getScript();


  console.log(zootopiaScript)

  function movePage(page) {
    zootopiaScript = getScript(page);
  }

</script>

<style lang="scss">
  .wrap {
    background-color: #000;
    height: 100%;
    padding-top: 24px;
  }
  .script {
    max-width: 568px;
    margin: auto;
    padding: 32px;
    height: 90vh;
    overflow: auto;
    border: 1px solid #fff;
  }
  .script__line {
    margin-bottom: 24px;
    color: #999
  }
  .line__name {
    display: block;
    text-transform: uppercase;
    font-weight: bold;
  }
  .line__text {
    padding-left: 8px;
    padding-top: 4px;
    font-size: 18px;
    line-height: 1.5;
  }
</style>