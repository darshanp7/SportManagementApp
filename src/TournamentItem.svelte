<script>
    export let tournamentName;
    export let startDate;
    export let startMonth;
    export let startYear;
    export let organizerName;
    export let chiefCoordinator;
    export let chiefCoordinatorContactNo;
</script>

<div class="item">
    <div class="ui internally celled grid">
        <div class="row">
            <div class="three wide column">
                <div class="statistic">
                    <div class="value">
                        {startDate}
                    </div>
                    <div class="label">
                        {startMonth}
                        {startYear}
                    </div>
                </div>
            </div>
            <div class="ten wide column">
                <div class="content">
                    <h4 class="ui header"> {tournamentName} </h4>
                    <div class="meta">
                        <span>Organizing Authority: {organizerName}</span>
                    </div>
                    <div class="description">
                        <p>
                            To Know More, Please Contact the Chief Co-ordinator
                            of the Organizing Institution:
                        </p>
                    </div>
                    <div class="extra">
                        {chiefCoordinator}: {chiefCoordinatorContactNo}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .statistic {
        margin-right: 10px;
    }
</style>
