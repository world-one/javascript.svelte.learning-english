<svelte:head>
  <title>영문장</title>
</svelte:head>

<div class="wrap">
  <ul class="script">
    {#each zootopiaScript.script as item, index}
    <li class="script__line">
      <span class="line__name">{item.name}</span>
      <p class="line__text">{item.line}</p>
    </li>
    {/each}
  </ul>
</div>

<script>
  
  import { getScript } from "../../service/zootopia";

  const zootopiaScript = getScript();
  

  console.log(zootopiaScript)

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
    color: #f0f0f0
  }
  .line__name {
    text-transform: uppercase;
    font-weight: bold;
  }
  .line__text {
    padding-top: 4px;
    font-size: 18px;
    line-height: 1.5;
  }
</style>