const { Router } = require('express');
const noteCtrl = require('../controllers/note.controller');

const route = Router();

route.get('/', noteCtrl.listNotes);

module.exports = route;
