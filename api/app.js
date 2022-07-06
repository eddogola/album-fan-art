const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// mount api auth routes to app
const auth_routes = require('./routes/auth');
app.use('/api/v1/auth', auth_routes);


app.get('/', (req, res) => {
	res.status(200).send({'ping': 'pong'});
});

module.exports = app;