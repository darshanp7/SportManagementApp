# TODO
## FrontEnd
    ## Two Dashboards
        ### User:
            - Home Page:
                - Shows Today's matches (if any)
                - Shows Upcoming matches (if any)
                - Shows current active Tournaments (if any)
                - Shows upcoming tournaments (if any)
            - Tournament Page:
                - displays current active tournament's result and upcoming matches in the tournament
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

## Database Schema:

 * tournament(<u>tournamentID</u>, name, organizerID, year, sport, prize, winner, runnerUp, manOfTheTournament)
 * organizer(<u>organizerID</u>, name, address, chiefCoordinator, contactNo, emailID);
 * team(<u>teamID</u>, <u>name</u>, sport)
 * player(<u>playerID</u>, team, name, age, contactNo, emailID, sport)
 * a_match(<u>matchID</u>, matchName, tournamentID, sport, date, location, team1, team2, winner, manOfTheMatch)
 * coach(<u>coachID</u>, name, yearsOfExperience, sport, teamID, noOfWins, noOfLoss, totalMatches)

## Tournament

| Name         | ID    | Organizer ID | Year | Sport      | Prize  | Winner | Man Of The Tournament |
| ------------ | ----- | ------------ | ---- | ---------- | ------ | ------ | --------------------- |
| Tournament 1 | 00001 | 1            | 2020 | Cricket    | 50,000 | SJCE   | NameX                 |
| Tournament 2 | 00002 | 2            | 2020 | VolleyBall | 50,000 | RNSIT  | NameZ                 |

## Organizer

| OrganizerID | Name | Address | Chief Coordinator | Contact No | Email ID        |
| ----------- | ---- | ------- | ----------------- | ---------- | --------------- |
| 1           | ORG1 | AREA1   | COORD1            | 9023456789 | COORD1@MAIL.COM |
| 2           | ORG2 | AREA2   | COORD2            | 9123456789 | COORD2@MAIL.COM |
| 3           | ORG3 | AREA3   | COORD3            | 9223456789 | COORD3@MAIL.COM |

## Teams

| Team Name | Team Id | Sport      |
| --------- | ------- | ---------- |
| TNAME1    | TID1    | Cricket    |
| TNAME2    | TID2    | Cricket    |
| TNAME3    | TID3    | Cricket    |
| TNAME4    | TID4    | VolleyBall |
| TNAME5    | TID5    | VolleyBall |
 
## Players

| ID  | Name  | Age | Contact No | EmailID        | Team | Sport   |
| --- | ----- | --- | ---------- | -------------- | ---- | ------- |
| 001 | NAMEA | 19  | 100        | NAMEA@MAIL.COM | TID1 | Cricket |
| 002 | NAMEB | 21  | 101        | NAMEB@MAIL.COM | TID2 | Cricket |

## Match

| Match ID | Match Name | Tournament ID | Sport      | Date       | Location | Team1  | Team2  | Winner | Man of the Match |
| -------- | ---------- | ------------- | ---------- | ---------- | -------- | ------ | ------ | ------ | ---------------- |
| 1        | Match-1    | 1             | Cricket    | 12/03/2022 | AREA1    | TNAME1 | TNAME2 | TNAME2 | NAMER            |
| 2        | Match-2    | 2             | VolleyBall | 13/03/2022 | AREA2    | TNAME4 | TNAME5 | TNAME4 | NAMET            |

## Coach

| Coach ID | Name   | Years of Experience | Sport      | Team ID | No of Wins | No of Loss | Total Matches |
| -------- | ------ | ------------------- | ---------- | ------- | ---------- | ---------- | ------------- |
| 1        | COACHA | 10                  | CRICKET    | TID1    | 6          | 2          | 9             |
| 2        | COACHB | 7                   | VolleyBall | TID5    | 3          | 4          | 7             |

## References

## Database & SQL:

* Basic Database Concepts and SQL:
    * Database System Concepts 7th Edition - Abraham Silberschatz, Henry Korth and S. Sudarshan.
* Connecting SQL with Nodejs
    * https://ibadsiddiqui.medium.com/using-mysql-with-nodejs-657b63b9f794
    * https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
    