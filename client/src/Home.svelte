<script>
    import MatchCard from "./MatchCard.svelte";
	import TournamentItem from "./TournamentItem.svelte";

	var matchData = [
		{
			teamA: "RCB",
			teamB: "KKR",
			dateOfMatch: "16 March 2022",
			startTime: "3PM",
		},
		{
			teamA: "CSK",
			teamB: "MI",
			dateOfMatch: "16 March 2022",
			startTime: "8PM",
		},
		{
			teamA: "RR",
			teamB: "KXIP",
			dateOfMatch: "18 March 2022",
			startTime: "8PM",
		}
	];

	var tournamentData = [
		{
			tournamentName: "University Cricket League",
			organizerName: "Bangalore Institute of Technology",
			startDate: "22",
			startMonth: "March",
			startYear: "2022",
			chiefCoordinator: "Narayana Gowda",
			chiefCoordinatorContactNo: "8564885232",
		},
		{
			tournamentName: "Volleyball Championship",
			organizerName: "St John College of Engineering",
			startDate: "04",
			startMonth: "April",
			startYear: "2022",
			chiefCoordinator: "Anthony",
			chiefCoordinatorContactNo: "8524585232",
		},
		{
			tournamentName: "Basketball Tourney",
			organizerName: "RNSIT",
			startDate: "10",
			startMonth: "May",
			startYear: "2022",
			chiefCoordinator: "Harish Nagaraj",
			chiefCoordinatorContactNo: "9004852821",
		}
	];
</script>

<div class="ui container" id="Home Tab">
    <div class="ui one column grid">
        <div class="row">
            <div class="ui two row grid">
                <div class="row"><h3>Upcoming Matches</h3></div>
                <div class="two column row">
                    {#each matchData as match}
                    <div class="column">
                        <MatchCard {...match} />
                    </div>
                    {/each}
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
                        {#each tournamentData as tournament}
                            <TournamentItem {...tournament} />
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>