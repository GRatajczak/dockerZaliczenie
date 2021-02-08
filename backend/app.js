const express = require('express');
const cors = require('cors');
const notes = require('./routes/notes');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(cors({
	origin: [
		'http://localhost:8080',
		'https://localhost:8080',
	],
	credentials: true,
	exposedHeaders: ['set-cookie']
}));

const accessLogStream = fs.createWriteStream(
	path.join(__dirname, 'logs', 'access.log'),
	{ flags: 'a' }
);

app.use(morgan('combined', { stream: accessLogStream }));

app.use(bodyParser.json());

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/api/notes', notes);

const server = require('http').createServer(app);

const port = process.env.PORT || 3001


mongoose.connect(
	process.env.MONGO_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.error('FAILED TO CONNECT TO MONGODB');
			console.error(err);
		} else {
			console.log('CONNECTED TO MONGODB');
			console.log('Server is working on port ' + port);
			server.listen(port)
		}
	}
);
