<script>
    export let teamA;
    export let teamB;
    export let dateOfMatch;
    export let startTime;
</script>

<div class="ui card" id = "card">
    <div class="content">
      <h4 class="ui header">{teamA} vs {teamB}</h4>
    </div>
    <div class="content">
        <h4 class="ui header"> Cricket </h4>
        <h4 class="ui header"> {dateOfMatch} </h4>
      
      <p> Match Starts at {startTime} </p>
      <button class="ui primary button">Notify Me</button>
    </div>
  </div>

  <style>
       #card {
           margin: 20px;
       }
  </style>