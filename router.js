import Words from './src/components/pages/Words.svelte';
import About from './src/components/pages/About.svelte';
import Sentence from './src/components/pages/Sentence.svelte';
import Zootopia from './src/components/pages/Zootopia.svelte';

export const routes = {
  '/': Words,
  '/about': About,
  '/sentence': Sentence,
  '/zootopia': Zootopia
}