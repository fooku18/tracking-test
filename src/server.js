const express = require('express');
const path = require('path');

const app = express();

const PORT = 2999;
const HOST = '0.0.0.0';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('./index.html');
});

app.listen(PORT, HOST);
