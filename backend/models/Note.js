var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    text: {
        type: String,
    },
	title: {
		type: String,
	},
    author: {
        type: String,
	},
    date: {
        type: Date,
        default: new Date()
    },
});
const Note = mongoose.model('Log', noteSchema);

noteSchema.post('save', function (doc, next) {

    console.log('====================================');
    console.log('Added new note');
    console.log('====================================');

    next();
})
module.exports = Note;
