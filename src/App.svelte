<script>
	import Router from "svelte-spa-router";
	import { routes } from "../router";
</script>

<body>
	<Router { routes } />
</body>

<style type="scss">
	:global(*) {
		margin: 0;
		padding: 0;
	}
	:global(li) {
		list-style: none;
	}
</style>