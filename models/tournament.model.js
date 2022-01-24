var dbConnection = require('./../config/db.config');

var Tournament = function(tournament){
    this.tournamentID = tournament.tournamentID;
    this.name = tournament.name;
    this.organizer = tournament.organizer;
    this.year = tournament.year;
    this.sport = tournament.sport;
    this.prize = tournament.prize;
};

Tournament.create = function (newTournament, result) {
    dbConnection.query("INSERT INTO tournament set ?", newTournament, function(err, res) {
        if(err){
            throw err;
            return;
        }

        console.log("New Tournament Record successfully inserted " + res.insertId);
    });
}

Tournament.getAllTournaments = function (result) {
    dbConnection.query("SELECT * FROM TOURNAMENT")
}

Tournament.update = function (id, tournament, )

module.exports = Tournament;