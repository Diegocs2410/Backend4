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

module.exports = noteCtrl;
