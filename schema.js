const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    note: { type: String, required: true },
});

const Note = mongoose.model('notes', noteSchema);

module.exports = Note;