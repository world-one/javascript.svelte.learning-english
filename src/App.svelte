<svelte:head>
	<title>영단어장</title>
</svelte:head>

<div class="wrap">
  <h1 class="title">{title}</h1>
	<div class="score">
		<span> 점수 : {score}</span>
		<button on:click={() => showHind = !showHind} class="toggle-language-button">힌트</button>
	</div>
  <ul class="words">
    {#each WORDS as item, index}
      <li class="word"> 
				<span>{index + 1}. </span>
        <span class="word__ko">{item[0]}</span>
				<div class="word__enter">
					<span class="word__en">
						<input placeholder={showHind ? masking(item[1]) : ''} type="text" on:input={(e) => isMatched(e.target.value, item[1], index)}>
					</span>
					<span class="correct-tag">{corrects[index] ? '정답' : '오답'}</span>
			</div>
      </li>
    {/each}
  </ul>
</div>

<script>
	import { WORDS } from "./contants/words";
	const WORDS_LENGTH = 20;
  const title = '단어장';
  const corrects = [];
	let showHind = false;
	let score = getScore();

	randomSortWords();
	
	function randomSortWords() {
		WORDS.sort(() => {
			return Math.random() - Math.random();
		});
		WORDS.splice(WORDS_LENGTH);
	}

  function isMatched(response, answer, index) {  
    corrects[index] = response.toLowerCase() === answer.toLowerCase();
		score = getScore();
    return corrects[index];
  }
	function getScore() {
		const correctScore = corrects.filter((v) => v === true).length;
		return `${correctScore} / ${WORDS_LENGTH}`;
	}

	function masking(word) {
		return word.replace(/(?<=.).(?=.)/g, '*');
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
			margin-bottom: 0;
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
		position: sticky;
		top: 0;
		border-top: 1px dashed #999;
		border-bottom: 1px dashed #999;
		padding: 4px 8px;
		margin-bottom: 16px;
		font-size: 15px;
		background-color: white;
		display: flex;
		justify-content: space-between;
	}
	.toggle-language-button {
		padding: 2px 4px;
		margin: 0;
		background-color: transparent;
		font-size: 13px;
	}
</style>