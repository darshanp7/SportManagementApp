const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;



app.listen(port, () => {
    console.log(`Server is running at port https://localhost:${port}`);
});