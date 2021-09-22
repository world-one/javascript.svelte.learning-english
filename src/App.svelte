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
					<span class="correct-tag">{corrects[index] ? '정답' : '오답'}</span>
			</div>
      </li>
    {/each}
  </ul>
</div>
<div class="score">
	점수 : {score}
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
	
	let score = getScore();

  function isMatched(response, answer, index) {  
    corrects[index] = response.toLowerCase() === answer.toLowerCase();
		score = getScore();
    return corrects[index];
  }
	function getScore() {
		const correctScore = corrects.filter((v) => v === true).length;
		console.log(corrects);
		return `${correctScore} / ${words.length}`;
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
		box-sizing: border-box;
    max-width: 576px;
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
		padding-top: 8px;
	}
  .word__en {
		input {
			text-align: right;
			border: 0;
			background-color: #aaa;
			color: #000;
			font-weight: bold;
			outline: none;
			padding: 4px 8px;
			margin-right: 16px;
		}
  }
	.correct-tag {
		border: 2px solid #acacac;
		font-size: 12px;
		border-radius: 4px;
		line-height: 16px;
		height: 16px;
		padding: 2px 4px;
	}
	.score {
		position: fixed;
		bottom: 16px;
		right: 16px;
		border: 2px solid #222;
		padding: 4px 8px;
		border-radius: 8px;
		font-size: 15px;
	}
</style>