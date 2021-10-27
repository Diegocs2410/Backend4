const { Router } = require('express');
const noteCtrl = require('../controllers/note.controller');

const route = Router();

route.get('/', noteCtrl.listNotes);
route.get('/:id', noteCtrl.listNoteById);
route.post('/', noteCtrl.addNote);
route.delete('/delete', noteCtrl.deleteNote);
route.put('/:id', noteCtrl.updateNote);

module.exports = route;
