const express = require('express');
const router = express.Router();
const Note = require('../models/Note');


router.post('/',(req, res) => {
	const text = req.body.text;
	const title = req.body.title;
	const author = req.body.author;
	if (!text || text.trim().length === 0) {
		console.log('INVALID INPUT - NO TEXT');
		return res.status(422).json({ message: 'Invalid note text.' });
	}
	try {
		const note =  Note.create({
			text: text,
			title: title,
			author: author
		});
		res.status(201).json({ message: 'note saved'});
		console.log('STORED NEW NOTE');
	} catch (err) {
		console.error('ERROR FETCHING NOTES');
		console.error(err.message);
		res.status(500).json({ message: 'Failed to save note.' });
	}

})
router.delete('/:id',(req, res) => {
	try {
		Note.deleteOne({ _id: req.params.id })
		  .exec()
		  .then(()=> {
			  res.status(200).json({ message: 'Deleted note!' });
			  console.log('DELETED NOTE');

		  })
	} catch (err) {
		console.error('ERROR FETCHING NOTES');
		console.error(err.message);
		res.status(500).json({ message: 'Failed to delete note.' });
	}
})

router.get('/:id',(req, res) => {
	try {
		Note.find({ _id: req.params.id })
			.exec()
			.then(docs => {
				res.status(200).json(docs);
			})
	} catch (err) {
		console.error('ERROR FETCHING GOALS');
		console.error(err.message);
		res.status(500).json({ message: 'Failed to load goals.' });
	}
})

router.get('/',(req, res) => {
	try {
		Note.find({})
			.exec()
			.then(docs => {
				res.status(200).json(docs);
			})
	} catch (err) {
		console.error('ERROR FETCHING NOTES');
		console.error(err.message);
		res.status(500).json({ message: 'Failed to load notes.' });
	}
})


module.exports = router;