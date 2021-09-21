
<div class="wrap">
  <h1 class="title">{title}</h1>
  <ul class="words">
    {#each words as item, index}
      <li class="word"> 
        <span class="word__ko">{item[0]}</span>
        <span class="word__en">
          <input class="" type="text" on:input={(e) => isMatched(e.target.value, item[1], index)}>
        </span>
        <span>{corrects[index] ? '정답' : '오답'}</span>
      </li>
    {/each}
  </ul>
</div>

<script>
  const title = '단어';
  const words = [
    ['~을 존중하다', 'respect']
  ];
  const corrects = [];
  function isMatched(response, answer, index) {
    console.log(response);
    
    corrects[index] = response === answer
    return corrects[index];
  }
</script>

<style lang="scss">
  .wrap {
    max-width: 786px;
    margin: 0 auto;
    border: 1px solid #aaa;
    border-radius: 8px;
    padding: 8px 12px;
  }
	.title {
      border-bottom: 1px solid #f0f0f0;
    }
  .word {
    display: flex;
    justify-content: space-around;
    font-size: 18px;
  }
  .word__en {
  }
</style>