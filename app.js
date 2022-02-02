const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static('./client/public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at port https://localhost:${port}`);
});