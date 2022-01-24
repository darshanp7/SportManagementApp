const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.type('text/plain')
    res.type('Login');
});

app.listen( port, 
    () => console.log(` Listening on Port ${port} Ctrl + C to Stop`));