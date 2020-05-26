const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const publicweb = './src/';
const port = 3001;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicweb));
app.use('/api', routes);

app.listen(port, () => console.log(`API running on http://localhost:${port}`));
