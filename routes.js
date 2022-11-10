const Note = require('./schema');
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {
    app.get('/', async (request, reply) => {
        const notes = await Note.find({});
        reply.code(200).send(notes);
    });

    app.post('/', async (request, reply) => {
        const note = request.body;
        note['id'] = uuidv4();
        const newNote = await Note.create(note);
        reply.code(201).send(newNote);
    });

    app.put('/:id', async (request, reply) => {
        const noteId = request.params.id;
        const updates = request.body;
        await Note.findByIdAndUpdate(noteId, updates);
        const noteToUpdate = await Note.findById(noteId);
        reply.code(200).send({ data: noteToUpdate });
    });

    app.delete('/:id', async (request, reply) => {
        const noteId = request.params.id;
        const noteToDelete = await Note.findById(noteId);
        await Note.findByIdAndDelete(noteId);
        reply.code(200).send({ data: noteToDelete });
    });
}