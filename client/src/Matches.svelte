<script>

    let columns = ['Match #', 'Tournament', 'Team 1', 'Team 2', 'Sport', 'Date', 'Time', 'Venue'];
    //data
    let matchData = [
        [1, '-', 'BIT', 'RNSIT', 'Cricket', '19-03-2022', '8PM', 'National Grounds, VV Puram'],
        [2, '-', 'BNMIT', 'BMSIT', 'Cricket', '21-03-2022', '8PM', 'National Grounds, VV Puram']
    ]
</script>

<h2 class="ui header"> Match Schedule </h2>

<table class="ui sortable celled table">
    <thead>
        <tr>
            {#each columns as column}
                <th> {column} </th>
            {/each}
        </tr>
    </thead>

    <tbody>
        {#each matchData as row}
            <tr>
                {#each row as cell}
                    <td contenteditable= "true" bind:innerHTML={cell} /> 
                {/each}
            </tr>
        {/each}
    </tbody>
  </table>