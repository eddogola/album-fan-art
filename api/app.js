const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('cookie-session');
const helmet = require('helmet');
const hpp = require('hpp');
const csurf = require('csurf');
const path = require('path');
const dotenv = require('dotenv');

// setup .env config
dotenv.config({path: path.resolve(__dirname, '.env')});
// import passport
const passport = require('./passport');

const app = express();

app.use(passport.initialize());

// app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// set security configs
app.use(helmet());
app.use(hpp());

// add cookie session support
app.use(
	session({
		name: 'session',
		secret: process.env.COOKIE_SECRET,
		expires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
	})
);
app.use(csurf());


// mount api auth routes to app
const auth_routes = require('./routes/auth');
app.use('/auth', auth_routes);


app.get('/', (req, res) => {
	res.status(200).send({'ping': 'pong'});
});

module.exports = app;