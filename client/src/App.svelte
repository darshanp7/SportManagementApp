<script>
	import Home from './Home.svelte';
	import jQuery from "jquery";
	import { onMount } from "svelte";
	import jquery from 'jquery';

	onMount(() => {
		jQuery(".ui .item").on("click", function () {
			jQuery(".ui .item").removeClass("active");
			jQuery(this).addClass("active");
			//console.log(jQuery(".ui .item .active").html());
		});
	});
</script>

<main>
	<div class="ui menu">
		<a class="ui item active"> Home </a>
		<a class="ui item"> Matches </a>
		<a class="ui item"> Tournaments </a>
		<div class="right menu">
			<a class="ui item" href="/"> Logout </a>
		</div>
	</div>
	<Home />
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
