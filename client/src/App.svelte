<script>
	import MatchCard from "./MatchCard.svelte";
	import TournamentItem from "./TournamentItem.svelte";
	import jQuery from 'jquery';
	import { onMount } from "svelte";

	onMount(() => {
		jQuery('.ui .item').on('click', function() {
			console.log("Clicked UI Item");
			jQuery('.ui .item').removeClass('active');
			jQuery(this).addClass('active');
		})
	});
	
</script>

<main>
	<div class="ui menu">
		<a class="ui item active" > Home </a>
		<a class="ui item"> Matches </a>
		<a class="ui item"> Tournaments </a>
		<div class="right menu">
			<a class="ui item" href="/"> Logout </a>
		</div>
	</div>
	<div class="ui container">
		

		<div class="ui one column grid">
			<div class="row">
				<div class="ui two row grid">
					<div class="row"><h3>Upcoming Matches</h3></div>
					<div class="two column row">
						<div class="column">
							<MatchCard
								teamA="RCB"
								teamB="KKR"
								dateOfMatch="16 March 2022"
								startTime="3PM"
							/>
						</div>
						<div class="column">
							<MatchCard
								teamA="CSK"
								teamB="MI"
								dateOfMatch="16 March 2022"
								startTime="8PM"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="ui two row grid">
					<div class="row">
						<h3>Upcoming Tournaments</h3>
					</div>
					<div class="row">
						<div class="ui divided items">
							<TournamentItem
								tournamentName="University Cricket League"
								organizerName="Bangalore Institute of Technology"
								startDate="22"
								startMonth="March"
								startYear="2022"
								chiefCoordinator="Narayana Gowda"
								chiefCoordinatorContactNo="8564885232"
							/>
							<TournamentItem
								tournamentName="Volleyball Championship"
								organizerName="St John College of Engineering"
								startDate="04"
								startMonth="April"
								startYear="2022"
								chiefCoordinator="Anthony"
								chiefCoordinatorContactNo="8004885239"
							/>
							<!-- <TournamentItem /> -->
							<!-- <TournamentItem /> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
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
