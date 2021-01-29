var mongoose = require('mongoose');

var noteSchema = new mongoose.Schema({
    taskId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    oldStatus: {
        type: String
    },
    currentStatus:{
        type: String
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
