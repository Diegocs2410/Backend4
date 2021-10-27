const noteCtrl = {};
const noteModel = require('../models/note.model');

noteCtrl.listNotes = async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.json({ ok: true, notes });
  } catch (error) {
    res.status(400).json({ ok: false, message: error.message });
  }
};
noteCtrl.listNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await noteModel.findById({ _id: id });
    if (!note) {
      return res.status(400).json({ ok: false, message: 'Note not found' });
    }
    res.status(201).json({ ok: true, note });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
noteCtrl.addNote = async (req, res) => {
  try {
    const { title, description, date, user, priority } = req.body;
    const newNote = noteModel({
      title,
      description,
      date,
      user,
      priority,
    });
    await newNote.save(); //Use save method from instance noteModel  */
    res.status(201).json({ ok: true, message: 'Note added succesfully' });
  } catch (error) {
    res.status(500).json({ ok: false, message: error.message });
  }
};
module.exports = noteCtrl;
