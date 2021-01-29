const express = require('express');
const cors = require('cors');
const notes = require('./routes/notes');
const mongoose = require('mongoose');

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

app.use('/api/notes', notes);

const server = require('http').createServer(app);

const port = process.env.PORT || 3001
console.log('Server is working on port ' + port);
server.listen(port)

mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
	.catch((err) => console.log(err));
