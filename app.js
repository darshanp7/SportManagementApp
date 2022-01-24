const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'database123',
    database: 'sports'
});

connection.connect((err) => {
    if(err){
        console.log('Error connecting to Db ' + err);
        return;
    }
    console.log('Connection Established');
});

connection.query('SELECT * FROM TOURNAMENT', (err, rows) => {
    if (err) throw err;

    console.log('Data recieved from Db:\n');
    // console.log(rows);

    rows.forEach((row) => {
        console.log(row.tournamentID + '|' + row.name + '|' + row.organizer);
    });
});

const tournament = { name: 'Chess Master', organizer: 'AMCE', year: 2022, prize: 80000};
connection.query('INSERT INTO TOURNAMENT SET ?', tournament, (err, res) => {
    if(err) throw err;

    console.log('Last Insert ID: ' + res.insertId);
});

connection.query(
    'UPDATE tournament SET name = ? Where tournamentID = ?',
    ['Football Tourney', 4],
    (err, res) => {
        if (err) throw err;

        console.log(`Changed ${res.changedRows} row(s)`);
    }
);

connection.end((err) => {

})