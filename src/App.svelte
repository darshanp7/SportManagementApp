<script>
	import Home from "./Home.svelte";
	import Matches from './Matches.svelte';
	import Tournaments from './Tournaments.svelte';

	let active = "Home";
	let loggedIn = false;
</script>

<main>
	<div class="ui menu">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="ui item {active === 'Home' ? 'active' : ''}"
			on:click={() => (active = "Home")}
		>
			Home
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="ui item {active === 'Matches' ? 'active' : ''}"
			on:click={() => (active = "Matches")}
		>
			Matches
		</a>
		<!-- svelte-ignore a11y-missing-attribute -->
		<a
			class="ui item {active === 'Tournaments' ? 'active' : ''}"
			on:click={() => (active = "Tournaments")}
		>
			Tournaments
		</a>
		<div class="right menu">
			<a class="ui item" href="/"> Profile </a>
			<a class="ui item" href="/"> Logout </a>
		</div>
	</div>
	{#if active == "Home"}
		<Home />
	{/if}
	{#if active == "Matches"}
		<Matches />
	{/if}
	{#if active == "Tournaments"}
		<Tournaments />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
