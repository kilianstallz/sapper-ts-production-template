<style lang="postcss">
	h1, figure, p {
		@apply text-center;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		max-width: 400px;
		@apply mx-auto;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<script lang="ts">
	export let title = 'Hello'
    // VS Code will show you an "Unexpected token" error; this is okay at this point
</script>

<svelte:head>
	<title>Some</title>
</svelte:head>

<h1>{title}</h1>

<figure>
	<img class="mx-auto" alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
