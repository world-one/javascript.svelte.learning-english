<svelte:head>
	<title>영단어장</title>
</svelte:head>

<div class="wrap">
  <h1 class="title">{title}</h1>
  <ul class="words">
    {#each words as item, index}
      <li class="word"> 
        <span class="word__ko">{item[0]}</span>
				<div class="word__enter">
					<span class="word__en">
						<input class="" type="text" on:input={(e) => isMatched(e.target.value, item[1], index)}>
					</span>
					<span>{corrects[index] ? '정답' : '오답'}</span>
			</div>
      </li>
    {/each}
  </ul>
</div>

<script>
  const title = '단어장';
  const words = [
    ['~을 존중하다', 'respect'],
		['의지', 'will'],
		['개인, 개인의', 'individual'],
		['편하게 생각해', 'Take it easy'],
		['~(관계 등)을 유지하다', 'maintain']
  ];
  const corrects = [];
  function isMatched(response, answer, index) {
    console.log(response);
    
    corrects[index] = response === answer
    return corrects[index];
  }
</script>

<style lang="scss">
	ul, input {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}
  .wrap {
    max-width: 786px;
    margin: 0 auto;
    border: 1px solid #aaa;
    border-radius: 8px;
    padding: 8px 12px;
		.title {
      border-bottom: 1px solid #f0f0f0;
    }
  }
	
  .word {
    font-size: 14px;
		align-items: center;
		border-bottom: 1px dashed #acacac;
		margin-bottom: 12px;
		padding: 0 8px 8px;

  }
	.word__ko {
		
	}
	.word__enter {
		display: flex;
    justify-content: flex-end;
	}
  .word__en {
		input {
			text-align: right;
			border: 0;
			border-bottom: 1px solid #666;
			color: #333;
			outline: none;
			padding: 0 4px;
			margin-right: 16px;
		}
  }
</style>