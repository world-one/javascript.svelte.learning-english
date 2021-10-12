<svelte:head>
  <title>영문장</title>
</svelte:head>

<div class="wrap">
  {#each sentenceWithWord as item, i}
   <p class="sentence">{item.sentence}</p>
   <ul>
    {#each item.words as word, j}
     <li class="word">{word[1]} : {word[0]}</li>
    {/each}
   </ul>
  {/each}
</div>

<script>
  import { SENTENCE } from "../../constants/sentence";
  import { WORDS } from '../../constants/words';

  const sentenceWithWord = SENTENCE.map((item) => {
    const containWords = WORDS.filter((word) => item.indexOf(word[1]) >= 0);
    return {
      sentence: item,
      words: containWords,
    }
  });

  console.log(sentenceWithWord);
</script>

<style lang="scss">
  .wrap {
    max-width: 568px;
    margin: 24px auto 0;
    box-shadow: 2px 4px 6px rgba(0,0,0,0.2);
    padding: 8px 16px;
    border: 1px solid #000;
  }
  .sentence {
    font-weight: bold;
    font-size: 18px;
    padding: 8px 0 4px;
    margin:16px 0 8px;
    border-bottom: 1px solid #acacac;
  }
  
  .word {
    padding: 8px 0 4px;
    border-bottom: 1px dashed #f0f0f0;
  }
</style>