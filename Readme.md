#FrontEnd
    ## Two Dashboards
        ### User:
            - Home Page:
                - Shows Today's matches (if any)
                - Shows Upcoming matches (if any)
                - Shows current active Tournaments (if any)
                - Shows upcoming tournaments (if any)
            - Tournament Page:
                - displays current active tournament's result and schedule
                - shows past tournament results
        ### Admin:
            - Home Page:
                - Shows Today's matches (if any)
                - Shows Upcoming matches (if any)
                - Shows current active Tournaments (if any)
                - Shows upcoming tournaments (if any)
            - Tournament Page:
                - displays current active tournament's result and schedule
                - shows past tournament results
                - create tournament
            - Match Page:
                - create Match
            - Results Page:
                - update match results
                - update tournament results
            - Players Page:
                - create, update and delete player info
            - Teams Page:
                - create, update and delete teams

# Database Schema:

 tournament(*tournamentID, name, organizer, year, sport, prize)
 team(*teamID, *name, *sport)
 player(*playerID, *team, name, age, contactNo, sport)
 match(*matchID, tournamentID, sport, date, homeTeam, awayTeam)
 matchResults(*matchID, tournamentId, matchName, winningTeam, manOfTheMatch)
 tournamentResults(*tournamentId, winningTeam, runnerUpTeam, manOfTheSeries)

# Tournament

| Name                      | ID    | Organizer | Year | Sport      | Prize  |
| ------------------------- | ----- | --------- | ---- | ---------- | ------ |
| University Cricket League | 00001 | BIT       | 2020 | Cricket    | 50,000 |
| Volleyball Championship   | 00002 | SKIT      | 2020 | VolleyBall | 50,000 |

Create Tournament
 -> ID (Create Automatically)
 -> Year
 -> Organizer
 -> Sport
 -> Prize

# Result
| Tournament ID | Winner |
| ------------- | ------ |
| 00001         | TID2   |

Create Result
 -> Tournament ID
 -> Winner (TeamID)

# Teams

| Team Name | Team Id | Sport   |
| --------- | ------- | ------- |
| TNAME1    | TID1    | Cricket |
| TNAME2    | TID2    | Cricket |
| TNAME3    | TID3    | Cricket |
| TNAME4    | TID4    | Cricket |
| TNAME5    | TID5    | Cricket |

Create Team
 -> Team ID (Create Automatically)
 -> Team Name
 -> Select Sport (From Dropdown)

Delete Team
 
# Players

| ID  | Name  | Age | Contact No | Team | Sport   |
| --- | ----- | --- | ---------- | ---- | ------- |
| 001 | NAMEA | 19  | 100        | TID1 | Cricket |
| 002 | NAMEB | 21  | 101        | TID2 | Cricket |

Create Player
 -> PlayerID (Create Automatically)
 -> Name
 -> Age
 -> Contact No
 -> TeamID (Suggest when typing Team Name)
 -> Sport (from Dropdown Menu)

 Update Player
 Delete Player


# References

## Database & SQL:

* Basic Database Concepts and SQL:
    * Database System Concepts 7th Edition - Abraham Silberschatz, Henry Korth and S. Sudarshan.
* Connecting SQL with Nodejs
    * https://ibadsiddiqui.medium.com/using-mysql-with-nodejs-657b63b9f794
    * https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
    