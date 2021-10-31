<svelte:head>
  <title>zootopia</title>
</svelte:head>

<div class="wrap">
  <div class="pagination">
    {#each { length: zootopiaScript.pages } as _, pageNumber}
      <button class="pagination__button {currentPage === pageNumber + 1 ? 'current' : ''}" on:click={() => movePage(pageNumber + 1)}>{ pageNumber + 1 }</button>
    {/each}
  </div>
  <ul class="script">
    {#each zootopiaScript.result as item, index}
    <li class="script__line">
      {#if 
        zootopiaScript.result[index - 1]?.name !== item.name
      }
      <span class="line__name">{item.name}</span>
      {/if}
      <p class="line__text">{item.line}</p>
    </li>
    {/each}
  </ul>
</div>

<script>
  import { getScript } from "../../service/zootopia";
  let currentPage = 1;
  let zootopiaScript = getScript();
  function movePage(page) {
    currentPage = page;
    zootopiaScript = getScript(page);
  }

</script>

<style lang="scss">
  button {
    margin-bottom: 0;
  }
  .wrap {
    background-color: #000;
    height: 100%;
  }
  .script {
    max-width: 568px;
    margin: auto;
    padding: 32px;
    overflow: auto;
    border: 2px solid #666;
    box-shadow: 2px 4px 8px rgba(255,255,255, 0.3);
    border-radius: 8px;
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

  .pagination {
    text-align: center;
    border-bottom: 1px dashed #999;
    margin-bottom: 16px;
    padding: 4px 0;
    &__button {
      border: none;
      background: none;
      color: #999;
      font-size: 20px;
      &.current {
        color: #fff;
        font-weight: bold;
      }
    }
  }
</style>